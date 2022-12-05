// Skills Icons
import html2Icon from "./images/html2.svg"
import cssIcon from "./images/css.svg"
import react2Icon from "./images/react2.svg"
import js2Icon from "./images/javascript2.svg"
import typescriptIcon from "./images/typescript.svg"
import php2Icon from "./images/php2.svg"
// import profileIcon from "./images/profile.svg"
// Social Icon
import githubIcon from "./images/github.svg"
// import instagramIcon from "./images/instagram.svg"
import linkedinIcon from "./images/linkedin.svg"
import git3Icon from "./images/git3.svg"
import mysql2Icon from "./images/mysql2.svg"

const data = {
  
  name: "Ciprian Rosu",
  headerTagline: [
    
    "Hi! I'm Ciprian Rosu",
    "I'm Frontend Developer",
    "",
  ],
  
  headerParagraph: "I'm based in Copenhagen and I enjoy building beautiful responsive websites using the latest technologies. Below you can view my projects.",
  contactEmail: "cip.rosu@yahoo.com",

  // Work Section ------------------------
  projects: [
    {
      title: "Travel", 
      para: "This a travel agency landing page built with HTML/CSS/JS animations .The app is suitable for all screen sizes .", 
      imageSrc:"https://user-images.githubusercontent.com/15197958/176220094-a59a84d8-b4a1-4c9b-808b-0f6b91b4beca.png",
      url: "https://agitated-lichterman-57ecda.netlify.app/?fbclid=IwAR2LPHrNDUqkeAGRwk5huqGLSS1qBZu3jeW_xz_Nc6e7JXeEgE5NPRtb5rM#",
      githuburl:"https://github.com/CiprianRosu/Travel",
      category: ["all", "JS"] ,
    },
    {
      title: "Netflix Clone - in progress", 
      para:"This is a Netflix-Clone app built with ReactJs . The movies seen in the app are not hardcoded , they are from a third party api.The librabry used to for Http requests is axios.", 
      imageSrc:"https://user-images.githubusercontent.com/15197958/170085506-178d9a36-11ab-4442-93e6-3a4219d30751.png",
      url: "",
      githuburl:"https://github.com/CiprianRosu/Netflix-Clone",
      category: ["all", "ReactJS"],  
    },
    {
      title: "Dropdown Navigation Layout", 
      para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", 
      imageSrc:"https://user-images.githubusercontent.com/15197958/199315195-def157df-f873-431b-ba76-3f57b295eabe.jpg",
      url: "https://splendid-pixie-86ea13.netlify.app/",
      githuburl: "https://github.com/CiprianRosu/Intro-section-with-dropdown-navigation-HTML-CSS-JS",
      category: ["all",  "JS"],
    },
    {
      title: "Airbnb-Clone-Homepage", 
      para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", 
      imageSrc:"https://user-images.githubusercontent.com/15197958/172471135-143467ce-0640-4169-b854-7a476501c505.png",
      url: "https://relaxed-cray-3961ca.netlify.app/",
      githuburl:"https://github.com/CiprianRosu/Airbnb-Clone-Homepage",
      category: ["all" , "ReactJS"],
    },
    {
      title: "Restaurant-App", 
      para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", 
      imageSrc:"https://user-images.githubusercontent.com/15197958/170079569-feb2b700-ee6d-4833-be74-688839fed7fd.png",
      url: "https://restaurant-app-xi.vercel.app/",
      githuburl:"https://github.com/CiprianRosu/Restaurant-app",
      category: ["all", "ReactJS"],
    },
  
    {
      title: "Weather App API",
      para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", 
      imageSrc:"https://user-images.githubusercontent.com/15197958/182199987-54985f4b-8ae6-459a-b573-cd56cd6b29df.png",
      url: "https://62ef74b5488b4a6a83a06a59--verdant-chaja-f4fa07.netlify.app/",
      githuburl:"https://github.com/CiprianRosu/Weather-App-JS",
      category: ["all" , "JS"],
    },
    {
      title: "Task List - CRUD App",
      para:"The app can create a list of tasks and the user can Create , Read , Update and Delete tasks in the list.", 
      imageSrc:"https://user-images.githubusercontent.com/15197958/205513812-4052841f-3233-4556-9ee7-c2ff9f57f1bb.png",
      url: "https://task-list-app-js.vercel.app/",
      githuburl:"https://github.com/CiprianRosu/Task-List-App---JS",
      category: ["all" , "JS"],
    },
    {
      title: "Book Management - CRUD App",
      para:"The app can perform CRUD operations , uses React Router for navigation and stores data in local storage.", 
      imageSrc:"https://user-images.githubusercontent.com/15197958/173627129-72d0a841-bbaa-4c08-8ca7-011b5eef386e.jpg",
      url: "https://book-management-app-alpha.vercel.app/",
      githuburl:"https://github.com/CiprianRosu/Book-Management-App",
      category: ["all" , "ReactJS"],
    },
   
  ],

  aboutParaOne:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  skills: [
    
    {
      img: html2Icon,
      para:
        "",
    },
    {
      img: cssIcon,
      para:
        "",
    },
    {
      img: js2Icon,
      para:
        "",
    },
    {
      img: typescriptIcon,
      para:
        "",
    },
    
    {
      img: php2Icon,
      para:
        "",
    },
    
    {
      img: react2Icon,
      para:
        "",
    },
    // {
    //   img: designIcon,
    //   para:
    //     "",
    // },
    {
      img: git3Icon,
      para:
        "",
    },
    {
      img: mysql2Icon,
      para:
        "",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "About me",
  promotionPara:
    "I am junior frontend developer with experience in building digital products with different technologies. Currently my stack of technologies has JavaScript as main language, I like to develop solutions that meet quality in terms of performance, accessibility and good practices. I am looking for job opportunities to grow professionally alongside a team of professionals in the industry.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    
    // {
    //   img: codepenIcon,
    //   url: "https://www.codepen.com/",
    // },
    { img: githubIcon, url: "https://github.com/CiprianRosu" },
    { img: linkedinIcon, url: "https://www.linkedin.com/in/ciprianandreirosu/",
  },
    // {
    //   img: instagramIcon,
    //   url: "https://www.instagram.com/",
    // },
  ],

  // End Contact Section ---------------
}


export default data
