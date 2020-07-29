import { blue, green, grey } from "@material-ui/core/colors";



const darkVariant = {
  name: "Dark",
  palette: {
    primary: {
      main: blue[700],
      contrastText: "#FFF"
    },
    secondary: {
      main: blue[500],
      contrastText: "#FFF"
    }
  },
  header: {
    color: grey[500],
    background: "#FFFFFF",
    search: {
      color: grey[800]
    },
    indicator: {
      background: blue[600]
    }
  },
  sidebar: {
    color: grey[200],
    background: "#1B2430",
    header: {
      color: grey[200],
      background: "#232f3e",
      brand: {
        color: blue[500]
      }
    },
    footer: {
      color: grey[200],
      background: "#232f3e",
      online: {
        background: green[500]
      }
    },
    category: {
      fontWeight: 400
    },
    badge: {
      color: "#FFF",
      background: blue[500]
    }
  },
  body: {
    background: "#F7F9FC"
  }
};

const variants = [
  darkVariant,
];

export default variants;
