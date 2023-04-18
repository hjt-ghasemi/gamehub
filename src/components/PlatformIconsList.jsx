import { Stack } from "@mui/material";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import Icon from "@mui/material/Icon";
import { grey } from "@mui/material/colors";
import { useTheme } from "@emotion/react";

const iconMap = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  web: BsGlobe,
  android: FaAndroid,
};

const PlatformIconsList = ({ platforms }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" mb={2}>
      {platforms.map(({ platform }) => {
        const MyIcon = iconMap[platform.slug];
        return (
          MyIcon && (
            <Icon
              sx={{
                color: (theme) =>
                  theme.palette.mode === "dark" ? grey[500] : grey[600],
                overflow: "visible",
              }}
            >
              <MyIcon size={15} />
            </Icon>
          )
        );
      })}
    </Stack>
  );
};

export default PlatformIconsList;
