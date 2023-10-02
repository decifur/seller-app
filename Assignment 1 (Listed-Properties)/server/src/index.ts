import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const propData = [
    {
      name: "RCE Theaters - 907 S Beckford Dr, Henderson, NC 27536",
      price: "$7,255",
      location: "8558 Pecan St.",
      image: "/images/city1.jpg",
      type: "For Rent",
      popular: false,
    },
    {
      name: "Costco Wholesale - 1021 Oak Forest Ln, Myrtle Beach, SC",
      price: "$7,255",
      location: "8558 Parker Rd.",
      image: "/images/city2.jpg",
      type: "For Rent",
      popular: true,
    },
    {
      name: "Regal North Hills - 4150 Main at North Hills St, Releigh",
      price: "$5,256",
      location: "3890 Poplar Dr.",
      image: "/images/city3.jpg",
      type: "For Sale",
      popular: true,
    },
    {
      name: "Spring Lane Cinemas - 1351 Plaza Blvd, Sanford, NC 27330",
      price: "$7,255",
      location: "8558 Green Rd.",
      image: "/images/city4.jpg",
      type: "For Rent",
      popular: false,
    },
    {
      name: "RCE Theaters - 907 S Beckford Dr, Henderson, NC 27536",
      price: "$7,255",
      location: "8558 Green Rd.",
      image: "/images/city5.jpg",
      type: "For Sale",
      popular: true,
    },
    {
      name: "Dollar General - 5416 Rock Quarry Rd, Raleigh, NC 27610",
      price: "$7,255",
      location: "8558 Parker Rd.",
      image: "/images/city6.jpg",
      type: "For Rent",
      popular: false,
    },

    {
      name: "RCE Theaters - 907 S Beckford Dr, Henderson, NC 27536",
      price: "$10,255",
      location: "8558 Pecan St.",
      image: "/images/city7.jpg",
      type: "For Rent",
      popular: false,
    },
    {
      name: "Costco Wholesale - 1021 Oak Forest Ln, Myrtle Beach, SC",
      price: "$17,255",
      location: "8558 Parker Rd.",
      image: "/images/city8.jpg",
      type: "For Rent",
      popular: true,
    },
    {
      name: "Regal North Hills - 4150 Main at North Hills St, Releigh",
      price: "$15,256",
      location: "3890 Poplar Dr.",
      image: "/images/city9.jpg",
      type: "For Sale",
      popular: true,
    },
  ];

  res.json(propData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
