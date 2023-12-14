import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";


const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "20px 0",
        }}
      >
        <Container>
          {/* Social Media Icons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <IconButton color="inherit" src="">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
              <TwitterIcon />
            </IconButton>
            <a href="https://www.linkedin.com/in/shashank-keshri-981993217/">
              <IconButton color="inherit">
                <LinkedInIcon />
              </IconButton>
            </a>
          </Box>

          {/* Copyright and Links */}
          <Typography variant="body2" align="center" gutterBottom>
            &copy; ShashankKeshri. All rights reserved.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <Typography variant="body2" sx={{ margin: "0 10px" }}>
              <a href="/privacy-policy">Privacy Policy</a>
            </Typography>
            <Typography variant="body2" sx={{ margin: "0 10px" }}>
              <a href="/terms-of-service">Terms of Service</a>
            </Typography>
            <Typography variant="body2" sx={{ margin: "0 10px" }}>
              <a href="/contact-us">Contact Us</a>
            </Typography>
          </Box>

          {/* Contact Details */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" sx={{ marginBottom: "5px" }}>
              Contact us:
            </Typography>
            <Typography variant="body2">
              <EmailIcon sx={{ marginRight: "5px" }} />
              <a href="mailto:info@example.com">shashankkeshri91109@gmail.com</a>
            </Typography>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
