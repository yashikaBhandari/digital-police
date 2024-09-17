import React from 'react';

//import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Button, Paper } from '@mui/material';
import MapView from '../components/MapView';
import ZoneForm from '../components/ZoneForm';
import ZoneDetails from '../components/ZoneDetails';

function HomePage() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Police Zone Management System
      </Typography>

      {/* Map Section */}
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '30px' }}>
        <Typography variant="h5" gutterBottom>
          Crime Mapping & Visualization
        </Typography>
        <MapView />
      </Paper>

      <Grid container spacing={4}>
        {/* Zone Form Section */}
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Add New Crime Zone
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                Add high-crime areas or update the safety status of different regions by adding a new zone with latitude, longitude, crime category, and count.
              </Typography>
              <ZoneForm />
            </CardContent>
          </Card>
        </Grid>

        {/* Zone Details Section */}
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                View Zone Details
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                Fetch and display details of a specific zone by entering latitude and longitude.
              </Typography>
              <ZoneDetails />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Button for Admin Page */}
      <Box sx={{ textAlign: 'center', marginTop: '40px' }}>
        <Button variant="contained" color="primary" href="/admin">
          Go to Admin Dashboard
        </Button>
      </Box>
    </Box>
  );
}

export default HomePage;

