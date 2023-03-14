import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { ReactElement } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Settings {
  [key: string]: () => void;
}

export default function NavUser() {
  const { data: session } = useSession();
  const router = useRouter();

  const settings: Settings = {
    Perfil: () => router.push("/perfil"),
    Logout: () => signOut(),
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleSettingClick = (setting: string) => {
    setAnchorElUser(null);
    settings[setting]();
  };

  return (
    <>
      {session ? (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="Remy Sharp"
                src={session.user?.image ?? ""}
                sx={{ width: 48, height: 48 }}
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {Object.keys(settings).map((setting) => (
              <MenuItem
                key={setting}
                onClick={() => handleSettingClick(setting)}
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 0 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              signIn();
            }}
          >
            Login
          </Button>
        </Box>
      )}
    </>
  );
}
