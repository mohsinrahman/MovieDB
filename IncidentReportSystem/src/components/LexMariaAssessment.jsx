import React, { useState } from "react";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
  Select,
  MenuItem,
  Button,
  Alert,
  Divider,
} from "@mui/material";

import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorIcon from '@mui/icons-material/Error';

const LexMariaAssessment = () => {
  const [answers, setAnswers] = useState({
    injuryOccurred: "Yes",
    seriousInjury: "Yes",
    couldLeadToInjury: "No",
  });

  const [justification, setJustification] = useState("");
  const [severity, setSeverity] = useState(3);
  const [likelihood, setLikelihood] = useState(4);
  const [riskScore, setRiskScore] = useState(null);
  const [conclusion, setConclusion] = useState("");

  const calculateRisk = () => {
    const score = severity * likelihood;
    setRiskScore(score);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 900, margin: "0 auto", bgcolor: "#f9fbfd", borderRadius: 2 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Lex Maria Assessment
      </Typography>
      <Typography variant="body2" gutterBottom>
        Potential Lex Maria: Based on your answers, this incident may require Lex Maria assessment. Please review the details carefully and document your decision.
      </Typography>

      {/* Lex Maria Questions */}
      <Box display="flex" gap={2} mt={2} flexWrap="wrap">
        {[
          {
            label: "Did the incident result in a healthcare-related injury?",
            key: "injuryOccurred",
            status: "Yes considered as a Lex Maria",
            color: "#FFA726",
          },
          {
            label: "Was the injury serious (permanent, extra care)?",
            key: "seriousInjury",
            status: "Yes considered as a Lex Maria",
            color: "#FFA726",
          },
          {
            label: "Could the incident have led to a serious injury even if no harm occurred?",
            key: "couldLeadToInjury",
            status: "No not considered as Lex Maria",
            color: "#66BB6A",
          },
        ].map(({ label, key, status, color }) => (
          <Box key={key} sx={{ border: `2px solid ${color}`, borderRadius: 2, p: 2, minWidth: 280, flex: 1 }}>
            <Typography variant="caption" color="textSecondary" fontWeight="bold" sx={{ color }}>
              {status}
            </Typography>
            <Typography variant="body2" mt={1}>
              {label}
            </Typography>
            <RadioGroup
              row
              value={answers[key]}
              onChange={(e) => setAnswers({ ...answers, [key]: e.target.value })}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </Box>
        ))}
      </Box>

      {/* Justification */}
      <Box mt={3}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Justification
        </Typography>
        <TextField
          multiline
          fullWidth
          minRows={3}
          value={justification}
          onChange={(e) => setJustification(e.target.value)}
          placeholder="Write your justification"
        />
      </Box>

      {/* Risk Evaluation */}
      <Box mt={4}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Risk Evaluation
        </Typography>

        <Box display="flex" gap={2} alignItems="center" mt={1}>
          <FormControl sx={{ minWidth: 200 }}>
            <Typography variant="body2" fontWeight="bold">
              Severity of Harm
            </Typography>
            <Select value={severity} onChange={(e) => setSeverity(Number(e.target.value))}>
              {[1, 2, 3, 4, 5].map((val) => (
                <MenuItem key={val} value={val}>
                  {val === 3 ? "Significant 3" : `Level ${val}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }}>
            <Typography variant="body2" fontWeight="bold">
              Likelihood of Occurrence
            </Typography>
            <Select value={likelihood} onChange={(e) => setLikelihood(Number(e.target.value))}>
              {[1, 2, 3, 4, 5].map((val) => (
                <MenuItem key={val} value={val}>
                  {val === 4 ? "Very likely 4" : `Level ${val}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button variant="outlined" onClick={calculateRisk}>
            Calculate
          </Button>
        </Box>

        {/* Risk Score */}
        {riskScore !== null && (
          <Box mt={2}>
            <Alert severity={riskScore >= 10 ? "error" : "warning"} icon={<ErrorIcon />}>
              {riskScore} considered as {riskScore >= 10 ? "High Risk – Immediate action required" : "Medium Risk"}
            </Alert>
            <Typography mt={1}>Risk Score: {riskScore}</Typography>
          </Box>
        )}

        {/* Further Action */}
        {riskScore >= 10 && (
          <Box mt={3}>
            <Alert severity="warning" icon={<WarningAmberIcon />}>
              Further Action Required (For High Risk Incidents)
            </Alert>
          </Box>
        )}
      </Box>

      {/* Conclusion */}
      <Box mt={4}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Conclusion<span style={{ color: "red" }}>*</span>
        </Typography>
        <TextField
          multiline
          fullWidth
          minRows={2}
          required
          value={conclusion}
          onChange={(e) => setConclusion(e.target.value)}
          placeholder="Write a text"
        />
      </Box>

      {/* Save Button */}
      <Box mt={3} textAlign="right">
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default LexMariaAssessment;
