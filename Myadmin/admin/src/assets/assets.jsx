import General_physician from './General_physician.svg';
import Gynecologist from './Gynecologist.svg';
import Dermatologist from './Dermatologist.svg';
import Pediatricians from './Pediatricians.svg';
import Neurologist from './Neurologist.svg';
import Gastroenterologist from './Gastroenterologist.svg';
import doc1 from './doc1.png';
import doc2 from './doc2.png';
import doc3 from './doc3.png';
import doc4 from './doc4.png';
import doc5 from './doc5.png';
import doc6 from './doc6.png';
import doc7 from './doc7.png';
import doc8 from './doc8.png';
import doc9 from './doc9.png';
import doc10 from './doc10.png';
import doc11 from './doc11.png';
import doc12 from './doc12.png';
import doc13 from './doc13.png';
import doc14 from './doc14.png';
import doc15 from './doc15.png';

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist,
    },
];

export const doctorsData = [
    {
        id: 1,
        name: "Dr. Ramesh Sharma",
        speciality: "General physician",
        rating: 4.8,
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Ramesh Sharma has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. They provide comprehensive patient care, which includes examining patients, developing treatment plans, prescribing medication, and educating patients about your health.',
        fees: 50,
        address: {
            line1: "123 Health Street",
            line2: "Sector 5, Delhi"
        },
        image: doc1,
        timeSlots: ['09:00 AM', '10:00 AM', '02:00 PM', '04:00 PM']
    },
    {
        id: 2,
        name: "Dr. Nisha Verma",
        speciality: "Gynecologist",
        rating: 4.6,
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Nisha Verma has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. These doctors are often the first point of contact for patients with general health concerns. They can diagnose and treat a wide range of illnesses and injuries and may refer patients to specialists when needed.',
        fees: 60,
        address: {
            line1: "456 Wellness Avenue",
            line2: "Baner, Pune"
        },
        image: doc2,
        timeSlots: ['09:30 AM', '11:00 AM', '03:00 PM', '05:00 PM']
    },
    {
        id: 3,
        name: "Dr. Aakash Mehta",
        speciality: "Neurologist",
        rating: 4.9,
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Mehta has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Neurologists use various diagnostic tools like MRI, CT scans, and EEG to identify nervous system abnormalities.',
        fees: 30,
        address: {
            line1: "789 Care Circle",
            line2: "JP Nagar, Bengaluru"
        },
        image: doc3,
        timeSlots: ['10:00 AM', '11:30 AM', '01:00 PM', '03:30 PM']
    },
    {
        id: 4,
        name: "Dr. Mohan Lal",
        speciality: "Dermatologist",
        rating: 4.5,
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Mohan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. They offer services like chemical peels, laser treatments, and other procedures to address cosmetic concerns like wrinkles, scars, and hyperpigmentation.',
        fees: 30,
        address: {
            line1: "15 Skin Lane",
            line2: "MG Road, Mumbai"
        },
        image: doc4,
        timeSlots: ['09:00 AM', '10:30 AM', '02:30 PM', '04:30 PM']
    },
    {
        id: 5,
        name: "Dr. Priya Singh",
        speciality: "Pediatricians", // Corrected "Pediatrician" to "Pediatricians" for consistency with specialityData
        rating: 4.7,
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Priya has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. They diagnose and treat a wide array of childhood illnesses, injuries, and chronic conditions, including common infections, developmental delays, and behavioral issues.',
        fees: 40,
        address: {
            line1: "22 Children Care",
            line2: "Anna Nagar, Chennai"
        },
        image: doc5,
        timeSlots: ['10:00 AM', '12:00 PM', '03:00 PM', '05:00 PM']
    },
    {
        id: 6,
        name: "Dr. Samrat Sinha",
        speciality: "Pediatricians", // Corrected "Pediatrician" to "Pediatricians" for consistency with specialityData
        rating: 4.3,
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Samrat has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. They diagnose and treat a wide array of childhood illnesses, injuries, and chronic conditions, including common infections, developmental delays, and behavioral issues.',
        fees: 40,
        address: {
            line1: "303 KidZone Clinic",
            line2: "Hitech City, Hyderabad"
        },
        image: doc6,
        timeSlots: ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM']
    },
    {
        id: 7,
        name: "Dr. Jennifer Garcia",
        speciality: "General physician", // Corrected "General Physician" to "General physician" for consistency
        rating: 4.4,
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Garcia has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. They are often the first point of contact for individuals seeking medical advice or treatment for a wide range of health concerns. They diagnose and manage various illnesses, provide preventive care, and can refer patients to specialists when necessary.',
        fees: 50,
        address: {
            line1: "12 Wellness Tower",
            line2: "Salt Lake, Kolkata"
        },
        image: doc7,
        timeSlots: ['10:30 AM', '12:30 PM', '03:30 PM', '05:30 PM']
    },
    {
        id: 8,
        name: "Dr. Andrew Williams",
        speciality: "Gastroenterologist",
        rating: 4.8,
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Williams has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. They perform various tests like colonoscopies, endoscopies, and imaging scans to identify the cause of digestive issues.',
        fees: 50,
        address: {
            line1: "45 Digestive Health Rd",
            line2: "Gomti Nagar, Lucknow"
        },
        image: doc8,
        timeSlots: ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM']
    },
    {
        id: 9,
        name: "Dr. Jahnavi",
        speciality: "General physician",
        rating: 4.6,
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Jahnavi has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. They diagnose and treat a broad spectrum of illnesses and injuries, from common colds and flu to more complex conditions.',
        fees: 50,
        address: {
            line1: "67 Urban Health",
            line2: "Boring Road, Patna"
        },
        image: doc9,
        timeSlots: ['09:30 AM', '10:30 AM', '02:00 PM', '04:00 PM']
    },
    {
        id: 10,
        name: "Dr. Santhosh",
        speciality: "Gynecologist",
        rating: 4.9,
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Santhosh may perform surgeries to treat various conditions, including hysterectomies, ovarian cyst removal, and cancer treatment. They monitor pregnancies, provide prenatal care, and manage labor and delivery.',
        fees: 60,
        address: {
            line1: "108 Maternity Ward",
            line2: "Andheri West, Mumbai"
        },
        image: doc10,
        timeSlots: ['10:00 AM', '12:00 PM', '04:00 PM', '06:00 PM']
    },
    {
        id: 11,
        name: "Dr. Ashmitha",
        speciality: "Dermatologist",
        rating: 4.9,
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Ashmitha has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: "101 Skin Glow Street",
            line2: "Sector 21, Chandigarh"
        },
        image: doc11,
        timeSlots: ['10:00 AM', '11:00 AM', '01:00 PM', '03:00 PM']
    },
    {
        id: 12,
        name: "Dr. Makla",
        speciality: "Pediatricians",
        rating: 4.9,
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Makla has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. They provide parents with advice and information on various aspects of child health, including nutrition, safety, and healthy lifestyle choices.',
        fees: 40,
        address: {
            line1: "45 Happy Kids Blvd",
            line2: "Indiranagar, Bengaluru"
        },
        image: doc12,
        timeSlots: ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM']
    },
    {
        id: 13,
        name: "Dr. Virasitha",
        speciality: "Neurologist",
        rating: 4.9,
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Virasitha has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. They manage both acute and chronic neurological conditions, often prescribing medications, physical therapy, and other therapies.',
        fees: 30,
        address: {
            line1: "55 NeuroCare Center",
            line2: "Viman Nagar, Pune"
        },
        image: doc13,
        timeSlots: ['10:00 AM', '12:00 PM', '03:00 PM', '05:00 PM']
    },
    {
        id: 14,
        name: "Dr. Christopher Lee",
        speciality: "Gastroenterologist",
        rating: 4.9,
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Lee has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. They perform various tests like colonoscopies, endoscopies, and imaging scans to identify the cause of digestive issues.',
        fees: 40,
        address: {
            line1: "88 Gut Wellness Hospital",
            line2: "Rajaji Nagar, Bengaluru"
        },
        image: doc14,
        timeSlots: ['09:30 AM', '11:30 AM', '02:30 PM', '04:30 PM']
    },
    {
        id: 15,
        name: "Dr. Rosy Shetty",
        speciality: "General physician", // Corrected "General Physician" to "General physician" for consistency
        rating: 4.9,
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Rosy has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. They diagnose and treat a broad spectrum of illnesses and injuries, from common colds and flu to more complex conditions.',
        fees: 50,
        address: {
            line1: "22 Wellness Road",
            line2: "Beside Metro Station, Kochi"
        },
        image: doc15,
        timeSlots: ['10:00 AM', '11:00 AM', '01:00 PM', '03:00 PM']
    },
];