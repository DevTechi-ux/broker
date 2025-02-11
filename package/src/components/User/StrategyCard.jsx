// src/components/StrategyCard.jsx
import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from '@mui/material';

const StrategyCard = ({ title, description, price, subscribed, onSubscribe }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"

        height="140"
        image=" https://imgs.search.brave.com/kywVqjX5eSyFZHgKdu24vHUkA40ck-5JnmbY8jh-JfU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hbGdv/YnVsbHMuY29tL2lt/Zy9ibG9ncy9ibG9n/X2ludHJvZHVjdGlv/blRvQWxnb3RyYWRp/bmcvaW50cm9kdWN0/aW9uX3RodW1ibmFp/bC5zdmc"
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          {price ? `$${price}/month` : 'Free Trial'}
        </Typography>
      </CardContent>
      <CardActions>
        {subscribed ? (
          <Button size="small" disabled>
            Subscribed
          </Button>
        ) : (
          <Button size="small" variant="contained" color="primary" onClick={onSubscribe}>
            Subscribe
          </Button>
        )}
      </CardActions>
    </Card>

  );
};


export default StrategyCard;
