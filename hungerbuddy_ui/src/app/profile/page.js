"use client";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const user = {
    name: "Akash",
    balance: 20,
    email: "akash@gmail.com",
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f5f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        pt: 6,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: { xs: "95%", sm: 420 },
          borderRadius: 3,
          p: 3,
        }}
      >
        {/* Header */}
        <Stack alignItems="center" spacing={1}>
          <Avatar
            sx={{
              bgcolor: "#ff9800",
              width: 72,
              height: 72,
              fontSize: 28,
            }}
          >
            {user.name[0]}
          </Avatar>

          <Typography variant="h6" fontWeight={600}>
            {user.name}
          </Typography>

          <Typography color="text.secondary" fontSize={14}>
            Welcome back!
          </Typography>

          <Box
            sx={{
              mt: 1,
              px: 2,
              py: 0.5,
              bgcolor: "#e3f2fd",
              borderRadius: 2,
              fontWeight: 600,
            }}
          >
            ₹ {user.balance}
          </Box>
        </Stack>

        <Divider sx={{ my: 3 }} />

        {/* Menu */}
        <Stack spacing={2}>
          <Button
            startIcon={<PersonIcon />}
            fullWidth
            sx={{ justifyContent: "flex-start" }}
            onClick={() => router.push("/profile/details")}
          >
            Profile
          </Button>

          <Button
            startIcon={<ShoppingBagIcon />}
            fullWidth
            sx={{ justifyContent: "flex-start" }}
            onClick={() => router.push("/orders")}
          >
            Orders
          </Button>

          <Divider />

          <Button
            startIcon={<LogoutIcon />}
            color="error"
            fullWidth
            sx={{ justifyContent: "flex-start" }}
            onClick={() => {
              // clear storage / logout api
              localStorage.clear();
              router.push("/login");
            }}
          >
            Logout
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
