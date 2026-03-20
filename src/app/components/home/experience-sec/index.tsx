import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2023-24",
            title: "Student",
            company: "College",
            type: "Fulltime",
            description: "First year of college, learning the basics of Programming like Python, C++."
        },
        {
            year: "2024-25",
            title: "Student",
            company: "College",
            type: "Fulltime",
            description: "Second year of college, learning more about programming and statistics using different website to become fluent in coding aspects"
        },
        {
             year: "2025-26",
            title: "Student",
            company: "College",
            type: "Fulltime",
            description: "Third year of college, learning advanced programming concepts and statistics , started using DSA in python projects"
        },
        {
            year: "2026",
             title: "Student",
            company: "College",
            type: "Fulltime",
            description: "Fourth Year of College, started creating projects using tableau , MySQL and Python to create data visualizations and dashboards , getting nominated for best project in college and got selected for internship in a reputed companyto become captain  for the 2025 SIH team"
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;