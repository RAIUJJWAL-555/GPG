import { useState } from 'react'
import logo from '../assets/logo.png'
import upGovtLogo from '../assets/upGovtLog.png'
import CardNav from '../components/CardNav.jsx'
import { href } from 'react-router';


function Header() {
  const items = [
    {
      label: "About Us",
      bgColor: "#0B1C2D",
      textColor: "#F8F6F2",
      links: [
        { label: "Home", ariaLabel: "Home page", href: '/' },
        { label: "About College", ariaLabel: "About College Legacy", href: '/about' },
        { label: "Staff", ariaLabel: "College staff information", href: '/staff' },
        { label: "Courses", ariaLabel: "Courses offered by college", href: '/courses' },
        { label: "Events", ariaLabel: "College events and activities", href: '/events' },
        { label: "Placement Cell", ariaLabel: "Placement cell information", href: '/placement-cell' }
      ]
    },
    {
      label: "Contact",
      bgColor: "#132840",
      textColor: "#F8F6F2",
      links: [
        { label: "Social Media", ariaLabel: "Contact via social media" },
        { label: "Address", ariaLabel: "College address" }
      ]
    },
    {
      label: "Student Section",
      bgColor: "#0B1C2D",
      textColor: "#F8F6F2",
      links: [
        { label: "Admission Process", ariaLabel: "JEECUP Admission Process", href: '/admission' },
        { label: "Student Login", ariaLabel: "Student login portal", href: 'https://bteup.ac.in/Eseva/OuterPages/StudentAdminLogin.aspx' },
        { label: "Scholarship", ariaLabel: "Scholarship information and application", href: 'https://scholarship.up.gov.in/index.aspx' },
        { label: "Syllabus", ariaLabel: "Course syllabus details", href: '/syllabus' },
        { label: "Admit Card", ariaLabel: "Download admit card", href: 'https://jeecup.admissions.nic.in/document-category/admit-card/' },
        { label: "Library", ariaLabel: "College library resources", href: "https://gpglibrary2020.blogspot.com/" },
        { label: "Result", ariaLabel: "Student examination results", href: "https://result.bteexam.com/" },
        { label: "Hostel Website", ariaLabel: "College hostel official website", href: "https://myhosty.netlify.app/" }
      ]
    },
  ];
  return (
    <>
      <CardNav
        ease="circ.out"
        items={items}
        leftLogo={logo}
        leftLogoAlt="GPG Logo"
        title="Government Polytechnic Ghaziabad"
      />
    </>
  )
}

export default Header
