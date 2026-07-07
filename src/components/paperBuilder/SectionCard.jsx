import {
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Stack,
  IconButton,
  Tooltip,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SectionCard = ({
  section,
  index,
  totalSections,
  onEdit,
  onDelete,
  onDuplicate,
  onMoveUp,
  onMoveDown,
}) => {
  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: 3,
      }}
    >
      <CardContent>

        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
        >

          <Grid item xs={12} md={8}>

            <Typography
              variant="h6"
              fontWeight="bold"
            >
              {section.title}
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              mt={1}
              flexWrap="wrap"
            >
              <Chip
                label={section.questionType}
                color="primary"
              />

              <Chip
                label={`Show : ${section.showQuestions}`}
              />

              <Chip
                label={`Attempt : ${section.attemptQuestions}`}
              />

              <Chip
                label={`${section.marksPerQuestion} Marks`}
              />

              <Chip
                label={`Total : ${section.totalMarks}`}
                color="success"
              />
            </Stack>

            <Typography
              mt={2}
              color="text.secondary"
            >
              Difficulty :
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              mt={1}
            >
              {section.difficulty.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  color="warning"
                />
              ))}
            </Stack>

            <Typography
              mt={2}
              color="text.secondary"
            >
              Bloom Levels :
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              mt={1}
              flexWrap="wrap"
            >
              {section.bloom.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  color="secondary"
                />
              ))}
            </Stack>

            <Typography
              mt={2}
              color="text.secondary"
            >
              Units
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              mt={1}
            >
              {section.units.map((item) => (
                <Chip
                  key={item}
                  label={item}
                />
              ))}
            </Stack>

            <Typography
              mt={2}
              color="text.secondary"
            >
              Course Outcomes
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              mt={1}
            >
              {section.co.map((item) => (
                <Chip
                  key={item}
                  label={item}
                />
              ))}
            </Stack>

          </Grid>

          <Grid item>

            <Stack direction="row">

              <Tooltip title="Move Up">
                <span>
                  <IconButton
                    disabled={index === 0}
                    onClick={() => onMoveUp(index)}
                  >
                    <KeyboardArrowUpIcon />
                  </IconButton>
                </span>
              </Tooltip>

              <Tooltip title="Move Down">
                <span>
                  <IconButton
                    disabled={
                      index === totalSections - 1
                    }
                    onClick={() =>
                      onMoveDown(index)
                    }
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </span>
              </Tooltip>

              <Tooltip title="Duplicate">
                <IconButton
                  color="secondary"
                  onClick={() =>
                    onDuplicate(section)
                  }
                >
                  <FileCopyIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Edit">
                <IconButton
                  color="primary"
                  onClick={() =>
                    onEdit(section)
                  }
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Delete">
                <IconButton
                  color="error"
                  onClick={() =>
                    onDelete(section.id)
                  }
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>

            </Stack>

          </Grid>

        </Grid>

      </CardContent>
    </Card>
  );
};

export default SectionCard;