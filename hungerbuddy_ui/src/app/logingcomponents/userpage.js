"use client";

import {
  Box,
  Card,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";

import Inventory2Icon from "@mui/icons-material/Inventory2";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function AccountPage() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "30px 15px",
        background: "#f6f7f9",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1200, display: "flex", gap: 3 }}>
        {/* LEFT SIDEBAR */}
        <Card
          sx={{
            width: 300,
            borderRadius: 4,
            padding: 3,
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          {/* Profile Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
            <AccountCircleIcon sx={{ fontSize: 50, color: "#1976d2" }} />
            <Box>
              <Typography fontWeight={600}>Rohit</Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                7089211599@nomail.jiomart.com
              </Typography>
              <Typography variant="body2">+91 7089211599</Typography>
            </Box>
          </Box>

          <Typography
            sx={{ fontWeight: 600, color: "#333", mb: 1, fontSize: "14px" }}
          >
            My Account
          </Typography>

          <List>
            <ListItem button>
              <ListItemIcon>
                <Inventory2Icon sx={{ color: "#1976d2" }} />
              </ListItemIcon>
              <ListItemText primary="My Orders" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <FavoriteIcon sx={{ color: "#ff477e" }} />
              </ListItemIcon>
              <ListItemText primary="Wishlist" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <FormatListBulletedIcon sx={{ color: "#1976d2" }} />
              </ListItemIcon>
              <ListItemText primary="My List" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <LocalOfferIcon sx={{ color: "#1976d2" }} />
              </ListItemIcon>
              <ListItemText primary="Coupons" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <LocationOnIcon sx={{ color: "#1976d2" }} />
              </ListItemIcon>
              <ListItemText primary="Delivery Addresses" />
            </ListItem>
          </List>
        </Card>

        {/* RIGHT SIDE – Account Info */}
        <Card
          sx={{
            flexGrow: 1,
            borderRadius: 4,
            padding: 3,
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              mb: 2,
              color: "#333",
            }}
          >
            Account Information
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Box>
              <Typography sx={{ color: "gray", fontSize: 14 }}>
                Full Name
              </Typography>
              <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
                Rohit
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ color: "gray", fontSize: 14 }}>
                Email ID
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                7089211599@nomail.jiomart.com
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ color: "gray", fontSize: 14 }}>
                Mobile No
              </Typography>
              <Typography sx={{ fontSize: 16 }}>+91 7089211599</Typography>
            </Box>

            <Box>
              <Typography sx={{ color: "gray", fontSize: 14 }}>
                Default Address
              </Typography>
              <Typography sx={{ fontSize: 16 }}>—</Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{
              mt: 4,
              width: 180,
              height: 45,
              borderRadius: 3,
              background: "#1976d2",
            }}
          >
            Edit
          </Button>
        </Card>
      </Box>
    </Box>
  );
}
