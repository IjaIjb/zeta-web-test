import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const AppFeatures = () => {
  // const features = [
  //   {
  //     category: "Health Monitoring & Tracking",
  //     items: [
  //       {
  //         title: "Real-time Vital Tracking",
  //         subItems: ["Monitors heart rate, blood pressure, oxygen saturation, and more."]
  //       },
  //       {
  //         title: "Sleep Monitoring & Analysis",
  //         subItems: ["Tracks sleep patterns, provides insights on sleep quality, and suggests improvements."]
  //       },
  //       {
  //         title: "Diet & Nutrition Tracking",
  //         subItems: ["Logs daily meals and calculates calorie, macronutrient, and micronutrient intake."]
  //       },
  //       {
  //         title: "Activity and Fitness Goals",
  //         subItems: ["Tracks steps, workouts, and other physical activities, with progress reports."]
  //       },
  //       {
  //         title: "Weight Management",
  //         subItems: ["Assists users in setting and achieving weight-related goals."]
  //       },
  //       {
  //         title: "Water Intake Reminders",
  //         subItems: ["Notifies users to stay hydrated based on their daily water goals."]
  //       },
  //       {
  //         title: "Chronic Condition Management",
  //         subItems: ["Tracks conditions like diabetes or hypertension with reminders and logs."]
  //       },
  //       {
  //         title: "Symptom Tracker",
  //         subItems: ["Logs symptoms and correlates them with health trends."]
  //       },
  //       {
  //         title: "Menstrual Cycle Tracker",
  //         subItems: ["Tracks and predicts menstrual cycles with health insights."]
  //       },
  //       {
  //         title: "Medication Reminders",
  //         subItems: ["Notifies users to take medications on schedule."]
  //       }
  //     ]
  //   },
  //   {
  //     category: "Personalized Health Insights",
  //     items: [
  //       {
  //         title: "Longevity Prediction (AI-powered)",
  //         subItems: ["Provides insights into how lifestyle changes can improve lifespan."]
  //       },
  //       {
  //         title: "Disease Risk Assessment",
  //         subItems: ["Evaluates risk levels for common diseases based on health data."]
  //       },
  //       {
  //         title: "Genetic Predisposition Reports",
  //         subItems: ["Offers insights into hereditary health risks."]
  //       },
  //       {
  //         title: "Tailored Exercise Plans",
  //         subItems: ["Suggests activities suited to the user’s goals and current health."]
  //       },
  //       {
  //         title: "Personalized Diet Suggestions",
  //         subItems: ["Recommends meals based on health goals and dietary preferences."]
  //       },
  //       {
  //         title: "Mental Health Monitoring",
  //         subItems: ["Tracks mood and stress levels, offering resources for emotional well-being."]
  //       },
  //       {
  //         title: "Custom Supplement Recommendations",
  //         subItems: ["Suggests vitamins and supplements based on nutritional gaps."]
  //       },
  //       {
  //         title: "Sleep Improvement Tips",
  //         subItems: ["Provides actionable advice to enhance sleep quality."]
  //       },
  //       {
  //         title: "Fitness Progress Reports",
  //         subItems: ["Tracks improvements and achievements in physical activity."]
  //       },
  //       {
  //         title: "Daily Health Summary Notifications",
  //         subItems: ["Sends a snapshot of health stats and suggestions for the day."]
  //       }
  //     ]
  //   },

  //   {
  //     category: " AI-Powered Assistance",
  //     items: [
  //       {
  //         title: "Health Chatbot for Guidance",
  //         subItems: ["AI-powered virtual assistant to answer health queries."]
  //       },
  //       {
  //         title: "Symptom Checker",
  //         subItems: ["AI-guided triage to evaluate symptoms and suggest next steps."]
  //       },
  //       {
  //         title: "Voice Commands",
  //         subItems: ["Enables users to interact with the app hands-free."]
  //       },
  //       {
  //         title: "Lifestyle Recommendations",
  //         subItems: ["Offers tips for healthy living tailored to user preferences."]
  //       },
  //       {
  //         title: "Mindfulness & Meditation Coach",
  //         subItems: ["Guides users through relaxation techniques."]
  //       },
  //       {
  //         title: "AI-based Workout Suggestions",
  //         subItems: ["Suggests exercises based on fitness levels and goals."]
  //       },
  //       {
  //         title: " Stress Level Analysis",
  //         subItems: ["Monitors and provides tips to reduce stress"]
  //       },

  //       {
  //         title: " Health Risk Prediction Alerts",
  //         subItems: ["Notifies users of potential health risks and steps to mitigate them."]
  //       },
  //       {
  //         title: " Mood Tracker & Suggestions",
  //         subItems: ["Logs mood changes and recommends activities for emotional balance."]
  //       },
  //       {
  //         title: "AI-generated Health Reports",
  //         subItems: ["Summarizes key health data into shareable reports."]
  //       }
  //     ]
  //   },

  //   {
  //     category: "Tokenization System",
  //     items: [
  //       {
  //         title: "Tokenization System",
  //         subItems: ["Earn tokens for completing exercises and sticking to routines."]
  //       },
  //       {
  //         title: "Leaderboard and Community Engagement",
  //         subItems: ["Encourages friendly competition with leaderboards."]
  //       },
  //       {
  //         title: "Token Wallet",
  //         subItems: ["Tracks earned tokens and their redemption options."]
  //       },
  //       {
  //         title: "Daily and Weekly Challenges",
  //         subItems: ["Offers token bonuses for achieving specific milestones"]
  //       },
  //       {
  //         title: "Premium Differentiation",
  //         subItems: ["Premium users enjoy exclusive token multipliers."]
  //       },

  //     ]
  //   },

  //   {
  //     category: "Doctor Matching System",
  //     items: [
  //       {
  //         title: "Real-Time Symptom Escalatio",
  //         subItems: ["Alerts users about severe symptoms and offers doctor matching."]
  //       },
  //       {
  //         title: "Doctor Matchmaking",
  //         subItems: ["Connects users to appropriate specialists."]
  //       },
  //       {
  //         title: " Teleconsultation Integration",
  //         subItems: ["Enables video or chat consultations with doctors."]
  //       },
  //       {
  //         title: " Medical History Sharing",
  //         subItems: ["Users can securely share detailed reports with matched doctors."]
  //       }

  //     ]
  //   },

  //   {
  //     category: "Skin Care AI",
  //     items: [
  //       {
  //         title: "Camera-Based Skin Analysis",
  //         subItems: ["Uses AI to analyze skin conditions via the smartphone camera."]
  //       },
  //       {
  //         title: "Personalized Skin Care Insights",
  //         subItems: ["Offers tailored recommendations for skin health"]
  //       },
  //       {
  //         title: "Interactive Chat with AI Skin Advisor",
  //         subItems: ["Provides instant tips and routines for optimal skincare."]
  //       },
  //       {
  //         title: "Skin Monitoring Over Time",
  //         subItems: ["Tracks improvements and adjusts recommendations."]
  //       },
  //       {
  //         title: " Skin Health Risk Alerts",
  //         subItems: ["Warns users about potential skin issues."]
  //       }

  //     ]
  //   },

  //   {
  //     category: "Hospital & Pharmacist Locator",
  //     items: [
  //       {
  //         title: "Nearby Hospitals & Clinics",
  //         subItems: ["Displays hospitals and clinics within a user-defined radius."]
  //       },
  //       {
  //         title: "Nearby Pharmacists",
  //         subItems: ["Shows pharmacies nearby, complete with contact and navigation details."]
  //       },
  //       {
  //         title: "Filter & Search Options",
  //         subItems: ["Allows users to search for specific healthcare services or specialties."]
  //       },
  //       {
  //         title: " Live Navigation",
  //         subItems: ["Integrates with maps for directions to selected locations."]
  //       }

  //     ]
  //   },

  //   {
  //     category: "Diagnostics & Reports",
  //     items: [
  //       {
  //         title: "Integration with Wearable Devices",
  //         subItems: ["Syncs data from smartwatches and fitness trackers."]
  //       },
  //       {
  //         title: "Digital Health Records Storage",
  //         subItems: ["Stores lab results, prescriptions, and medical history."]
  //       },
  //       {
  //         title: "Medical Imaging Analysis",
  //         subItems: ["AI-powered insights from uploaded scans (e.g., X-rays)."]
  //       },
  //       {
  //         title: "Family Health History Tracker",
  //         subItems: ["Helps track genetic predispositions."]
  //       },
  //       {
  //         title: "Detailed Blood Work Insights",
  //         subItems: ["Offers insights into lab results with explanations."]
  //       },
  //       {
  //         title: "Health Report Sharing",
  //         subItems: ["Generates shareable, detailed health reports for doctors, ensuring informed consultations."]
  //       }

  //     ]
  //   },

  //   {
  //     category: "Social & Community Features",
  //     items: [
  //       {
  //         title: "Health Challenges & Leaderboards",
  //         subItems: ["Promotes friendly competition for health goals."]
  //       },
  //       {
  //         title: "Community Forums & Support Groups",
  //         subItems: ["Connects users with like-minded individuals."]
  //       },
  //       {
  //         title: "Virtual Health Coaching",
  //         subItems: ["Offers one-on-one coaching from experts."]
  //       },
  //       {
  //         title: "Family Account Linking",
  //         subItems: ["Enables tracking and support for family members."]
  //       },
  //       {
  //         title: "Health Goal Sharing",
  //         subItems: ["Shares achievements and goals with friends."]
  //       }
  //     ]
  //   },

  //   {
  //     category: "E-commerce Marketplace",
  //     items: [
  //       {
  //         title: "Health & Wellness Product Store",
  //         subItems: ["Offers supplements, fitness equipment, and wearable devices."]
  //       },
  //       {
  //         title: "AI-driven Product Recommendations",
  //         subItems: ["Suggests products based on health data."]
  //       },
  //       {
  //         title: "Service Bookings",
  //         subItems: ["Allows users to book lab tests, consultations, and fitness classes."]
  //       }
  //     ]
  //   },
  // ];
  // const [formData, setFormData] = useState({
  //   email: "",
  // });

  // Handle input changes
  // const handleChange = (e: any) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // Handle form submission
  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(
  //       "https://zeta-nvjw.onrender.com/api/submissions",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );

  //     if (response.ok) {
  //       toast.success("Form submitted successfully!");

  //       // alert('Form submitted successfully!');
  //       setFormData({
  //         // last_name: '',
  //         email: "",
  //         // phone: '',
  //         // message: '',
  //       });
  //     } else {
  //       toast.error("Failed to submit form");

  //       // alert('Failed to submit form');
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     toast.error("An error occurred while submitting the form");

  //     // alert('An error occurred while submitting the form');
  //   }
  // };

  const features = [
    {
      category: "Health Monitoring & Tracking",
      description:
        "Stay on top of your health with real-time tracking and reminders.",
      image: "/images/health-tracking.jpg", // Replace with your image path
      items: [
        "Real-time Vital Tracking",
        "Sleep Monitoring & Analysis",
        "Diet & Nutrition Tracking",
        "Activity and Fitness Goals",
        "Weight Management",
        "Water Intake Reminders",
        "Chronic Condition Management",
        "Symptom Tracker",
        "Menstrual Cycle Tracker",
        "Medication Reminders",
      ],
    },
    {
      category: "Personalized Health Insights",
      description: "Receive insights tailored to your health goals and data.",
      image: "/images/health-insights.jpg", // Replace with your image path
      items: [
        "Longevity Prediction (AI-powered)",
        "Disease Risk Assessment",
        "Genetic Predisposition Reports",
        "Tailored Exercise Plans",
        "Personalized Diet Suggestions",
        "Mental Health Monitoring",
        "Custom Supplement Recommendations",
        "Sleep Improvement Tips",
        "Fitness Progress Reports",
        "Daily Health Summary Notifications",
      ],
    },
    {
      category: "AI-Powered Assistance",
      description: "Leverage AI to guide you through health-related decisions.",
      image: "/images/ai-assistance.jpg", // Replace with your image path
      items: [
        "Health Chatbot for Guidance",
        "Symptom Checker",
        "Voice Commands",
        "Lifestyle Recommendations",
        "Mindfulness & Meditation Coach",
        "AI-based Workout Suggestions",
        "Stress Level Analysis",
        "Health Risk Prediction Alerts",
        "Mood Tracker & Suggestions",
        "AI-generated Health Reports",
      ],
    },
    {
      category: "Tokenization System",
      // description: "Leverage AI to guide you through health-related decisions.",
      image: "/images/ai-assistance.jpg", // Replace with your image path
      items: [
        "Tokenization System",
        "Leaderboard and Community Engagement",
        "Token Wallet",
        "Daily and Weekly Challenges",
      ],
    },

    {
      category: "Doctor Matching System",
      // description: "Leverage AI to guide you through health-related decisions.",
      image: "/images/ai-assistance.jpg", // Replace with your image path
      items: [
        "Real-Time Symptom Escalation",
        "Doctor Matchmaking",
        "Teleconsultation Integration",
        "Medical History Sharing",
      ],
    },

    {
      category: "Skin Care AI",
      // description: "Leverage AI to guide you through health-related decisions.",
      image: "/images/ai-assistance.jpg", // Replace with your image path
      items: [
        "Camera-Based Skin Analysis",
        "Personalized Skin Care Insights",
        "Interactive Chat with AI Skin Advisor",
        "Skin Monitoring Over Time",
      ],
    },

    {
      category: "Hospital & Pharmacist Locator",
      // description: "Leverage AI to guide you through health-related decisions.",
      image: "/images/ai-assistance.jpg", // Replace with your image path
      items: [
        "Nearby Hospitals & Clinics",
        "Nearby Pharmacists",
        "Filter & Search Options",
        "Live Navigation",
      ],
    },

    {
      category: "Diagnostics & Reports",
      // description: "Leverage AI to guide you through health-related decisions.",
      image: "/images/ai-assistance.jpg", // Replace with your image path
      items: [
        "Integration with Wearable Devices",
        "Digital Health Records Storage",
        "Medical Imaging Analysis",
        "Family Health History Tracker",
      ],
    },

    {
      category: "Social & Community Features",
      // description: "Leverage AI to guide you through health-related decisions.",
      image: "/images/ai-assistance.jpg", // Replace with your image path
      items: [
        "Health Challenges & Leaderboards",
        "Community Forums & Support Groups",
        "Virtual Health Coaching",
        "Family Account Linking",
      ],
    },

    {
      category: "E-commerce Marketplace",
      // description: "Leverage AI to guide you through health-related decisions.",
      image: "/images/ai-assistance.jpg", // Replace with your image path
      items: [
        "Health & Wellness Product Store",
        "AI-driven Product Recommendations",
        "Service Bookings",
      ],
    },
    // Add more categories here...
  ];

  return (
    <div>
      <div className="bg-[#262626] h-full  relative">
        <div className="bg-black">
          <div
            className="about-transition_main-img bg-cover bg-center h-full"
            style={{
              backgroundImage:
                "url('https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b7eb0c290e7bf3aaab98f0_tranisiton-bg.webp')",
            }}
          >
            <div className="lg:p-3 p-2 w-full flex justify-center">
              <div className="max-w-[2000px] lg:px-14 px-3 w-full">
                <div className="flex justify-center">
                  <Navbar />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-16 pt-[120px]">
          {/* <div className="bg-gradient-to-r from-black via-gray-900 to-black py-16"> */}
          <header className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-gray-200">
              Discover Zetakree
            </h1>
            <p className="text-lg text-gray-400 mt-4">
              Experience cutting-edge health solutions tailored to your needs.
            </p>
          </header>
          <main className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group rounded-xl h-[260px]  overflow-hidden shadow-xl hover:shadow-2xl transition"
              >
                {/* <img
              src={feature.image}
              alt={feature.category}
              className="w-full h-52 object-cover group-hover:scale-105 transition-transform"
            /> */}
                <div className="absolute inset-0  bg-gradient-to-t from-black via-transparent to-transparent opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0  bg-gradient-to-l from-black via-transparent to-transparent opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-4 left-4 right-4 text-white">
                  <h2 className="text-2xl font-bold mb-2">
                    {feature.category}
                  </h2>
                  <p className="text-sm mb-4">{feature.description}</p>
                  <div className="text-sm space-y-2">
                    {feature.items.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-md text-white font-bold text-sm">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  {/* <button className="mt-4 bg-green-500 px-4 py-2 text-sm font-semibold rounded hover:bg-green-400">
                Learn More
              </button> */}
                </div>
              </div>
            ))}
          </main>
        </div>

        {/* <div className="mb-20">
          <div id="get-in-touch" className="flex justify-center ">
            <h3 className="text-[#f5f5f5] text-center leading-[45px] lg:leading-[60px]  z-10 text-[40px] lg:text-[4rem] ">
              Join Our Waitlist
            </h3>
          </div>
        </div>
    <div className="flex justify-center">
          <div className="max-w-[2000px] lg:px-14 px-3 w-full">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4"></div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative w-full mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-[24px] font-semibold text-white"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="border bg-transparent border-[#737373] text-white text-[18px] rounded-[10px] block w-full p-3 placeholder-[#737373]  ease-linear transition-all duration-150"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    // onChange={handleChange}
                    // value={userData.email}
                  />
              </div>
              </div>

              <div className="lg:pl-4 mb-7">
                <button
                  type="submit"
                  className="py-4 px-9  text-lg font-medium  bg-[#23F7DD] rounded-lg "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div> */}
        <Footer />
      </div>
      {/* <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          /> */}
    </div>
  );
};

export default AppFeatures;
