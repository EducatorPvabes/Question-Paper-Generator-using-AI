import { useLocation } from "react-router-dom";

import {
  Typography,
  Paper,
  Divider,
  Box,
} from "@mui/material";

import DashboardLayout from "../../layouts/DashboardLayout";

const PaperPreview = () => {

  const { state } = useLocation();

  const paper = state?.paper;

  if (!paper) {

    return (

      <DashboardLayout>

        <Typography variant="h5">

          No Paper Generated

        </Typography>

      </DashboardLayout>

    );

  }
  const totalMarks =
paper.sections.reduce(

(sum,sec)=>

sum+

sec.questions.reduce(

(s,q)=>

s+Number(q.marks),

0),

0

);

  return (

    <DashboardLayout>

      <Paper
        sx={{
          p:5,
          background:"#fff",
        }}
      >

        <Typography
          align="center"
          variant="h4"
          fontWeight="bold"
        >
          {paper.paperInfo.college}
        </Typography>

        <Typography
          align="center"
        >
          {paper.paperInfo.university}
        </Typography>

        <Typography
          align="center"
        >
          {paper.paperInfo.department}
        </Typography>

        <Divider sx={{my:3}} />

        <Box
          display="flex"
          justifyContent="space-between"
        >

          <Typography>

            Subject :
            {paper.paperInfo.subject}

          </Typography>

          <Typography>

            Code :
            {paper.paperInfo.subjectCode}

          </Typography>

        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          mt={2}
        >

          <Typography>

            Duration :
            {paper.paperInfo.duration}

          </Typography>

          <Typography>

            Max Marks :
{totalMarks}
          </Typography>

        </Box>

        <Divider sx={{my:3}} />

        {paper.sections.map((section,index)=>(

          <Paper
            key={index}
            sx={{
              p:2,
              mb:3,
            }}
            variant="outlined"
          >

            <Typography
              variant="h6"
              fontWeight="bold"
            >

              Section {String.fromCharCode(65+index)}

            </Typography>

            <Typography>

              {section.instructions}

            </Typography>

            <Divider sx={{my:2}} />

            {section.questions.map((q,i)=>(

              <Box
                key={q.id}
                mb={3}
              >

                <Typography>

                  {index+1}.{i+1} {q.question}

                </Typography>

                <Typography
                  color="text.secondary"
                >

                  ({q.marks} Marks)

                </Typography>

              </Box>

            ))}

          </Paper>

        ))}

      </Paper>

    </DashboardLayout>

  );

};

export default PaperPreview;