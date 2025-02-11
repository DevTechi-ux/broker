import React, { useState } from "react";  
import { Card, TextField, Button, Typography, Avatar, Box, MenuItem } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

const ProfileSettings = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "",
    verified: false,
    profilePic: "https://via.placeholder.com/100",
  });

  const [verification, setVerification] = useState({
    idType: "",
    idProof: null,
    submitted: false,
  });

  // Handle Profile Changes
  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle Verification Changes
  const handleVerificationChange = (e) => {
    setVerification({ ...verification, [e.target.name]: e.target.value });
  };

  // Handle File Upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVerification({ ...verification, idProof: file });
    }
  };

  // Handle Form Submission
  const handleVerificationSubmit = () => {
    if (verification.idType && verification.idProof) {
      setVerification({ ...verification, submitted: true });

      // Simulate verification approval after delay
      setTimeout(() => {
        setProfile({ ...profile, verified: true });
      }, 2000);
    }
  };

  return (
    <div style={{ marginTop: '100px' }}>
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, p: 4 }}>
      {/* Profile Card */}
      <Card sx={{ width: "100%", maxWidth: 500, p: 3, textAlign: "center" }}>

        <Avatar src={profile.profilePic} sx={{ width: 80, height: 80, margin: "auto" }} />
        <Typography variant="h6" mt={2}>{profile.name}</Typography>
        <Typography variant="body2" color="textSecondary">{profile.email}</Typography>
        <Typography variant="body2" color={profile.verified ? "success.main" : "error.main"}>
          {profile.verified ? "Verified ✅" : "Not Verified ❌"}
        </Typography>
        <TextField fullWidth label="Phone Number" name="phone" value={profile.phone} onChange={handleProfileChange} sx={{ mt: 2 }} />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>Save Changes</Button>
      </Card>

      {/* Verification Form */}
      {!profile.verified && (
        <Card sx={{ width: "100%", maxWidth: 500, p: 3, textAlign: "center" }}>
          {/* Centered Heading */}
          <Box sx={{ display: "flex", justifyContent: "center", width: "100%", mb: 3 }}>
            <Typography variant="h6">User Verification</Typography>
          </Box>

          <TextField select fullWidth label="ID Type" name="idType" value={verification.idType} onChange={handleVerificationChange} sx={{ mt: 2 }}>
            <MenuItem value="passport">Passport</MenuItem>
            <MenuItem value="driver_license">Driver's License</MenuItem>
            <MenuItem value="national_id">National ID</MenuItem>
          </TextField>

          {/* Upload ID Proof */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 2 }}>
            <Button variant="contained" component="label" startIcon={<CloudUpload />} sx={{ mb: 2 }}>
              Upload ID Proof
              <input type="file" hidden onChange={handleFileUpload} />
            </Button>
            {verification.idProof && (
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                {verification.idProof.name}
              </Typography>
            )}
          </Box>

          {/* Submit Button */}
          <Button 
            variant="contained" 
            color="success" 
            sx={{ mt: 2 }} 
            onClick={handleVerificationSubmit}
            disabled={verification.submitted}
          >
            {verification.submitted ? "Verification in Progress..." : "Submit for Verification"}
          </Button>
        </Card>
      )}
    </Box>
    </div>
  );
};


export default ProfileSettings;
