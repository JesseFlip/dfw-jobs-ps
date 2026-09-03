import React, { useState, useMemo } from 'react';
import { Search, MapPin, DollarSign, Calendar, Briefcase, ExternalLink, Filter, X } from 'lucide-react';

// Job Data based on the provided list
const jobsData = [
  {
    id: 1,
    company: "Myriad 360",
    title: "White Glove Field Technician",
    type: "Remote",
    location: "Dallas, TX",
    pay: "$50,000 - $70,000 / yr + bonus/commission",
    deadline: "2026-09-25",
    link: "https://perscholas.my.site.com/careerportal/s/job-opportunity/a8rPZ00000056kjYAA/myriad-360white-glove-field-technician",
    description: "Entry-level field technician position providing white-glove IT support and service."
  },
  {
    id: 2,
    company: "TEKsystems",
    title: "Application Packaging Engineer (App Vol)",
    type: "Remote",
    location: "Dallas, TX",
    pay: "$50 - $70 / hr",
    deadline: "2026-09-15",
    link: "https://perscholas.my.site.com/careerportal/s/job-opportunity/a8rPZ00000056eZYAQ/teksystemsapplication-packaging-engineer-app-vol",
    description: "Entry-level engineering role focused on application packaging using App Volumes."
  },
  {
    id: 3,
    company: "TEKsystems",
    title: "Epic Optime/Radiant Analyst",
    type: "Remote",
    location: "Dallas, TX",
    pay: "$80 - $90 / hr",
    deadline: "2026-09-04",
    link: "https://perscholas.my.site.com/careerportal/s/job-opportunity/a8rPZ00000056J3YAI/teksystemsepic-optimeradiant-analyst",
    description: "Entry-level analyst specializing in Epic Optime and Radiant systems for healthcare IT environments."
  },
  {
    id: 4,
    company: "TEKsystems",
    title: "SailPoint App Onboarding Team Lead",
    type: "Remote",
    location: "Dallas, TX",
    pay: "$60 - $75 / hr",
    deadline: "2026-09-04",
    link: "https://perscholas.my.site.com/careerportal/s/job-opportunity/a8rPZ00000053xSYAQ/teksystemssailpoint-application-onboarding-team-l",
    description: "Entry-level team lead position overseeing the onboarding of applications into SailPoint Identity Governance."
  },
  {
    id: 5,
    company: "TEKsystems",
    title: "Systems Engineer",
    type: "Remote",
    location: "Richardson, TX",
    pay: "$60 - $65 / hr",
    deadline: "2026-09-02",
    link: "https://perscholas.my.site.com/careerportal/s/job-opportunity/a8rPZ00000053uHYAQ/teksystemssystems-engineer",
    description: "Entry-level systems engineer responsible for maintaining and optimizing IT infrastructure."
  },
  {
    id: 6,
    company: "TEKsystems",
    title: "Sr. Network Engineer",
    type: "Remote",
    location: "Richardson, TX",
    pay: "$70 - $75 / hr",
    deadline: "2026-09-03",
    link: "https://perscholas.my.site.com/careerportal/s/job-opportunity/a8rPZ00000053tHYAQ/teksystemssr-network-engineer",
    description: "Entry-level senior network engineer role focusing on network architecture, routing, and switching."
  },
  {
    id: 7,
    company: "TEKsystems",
    title: "Entry Level Helpdesk Support",
    type: "Hybrid",
    location: "Irving, TX",
    pay: "$16.25 - $18 / hr",
    deadline: "2026-09-15",
    link: "https://perscholas.my.site.com/careerportal/s/job-opportunity/a8rPZ00000056ffYAA/teksystemsentry-level-helpdesk-support",
    description: "Tier 1 helpdesk support role assisting users with hardware and software troubleshooting."
  },
  {
    id: 8,
    company: "TEKsystems",
    title: "Entry Level Helpdesk Support",
    type: "Hybrid",
    location: "Irving, TX",
    pay: "$16.25 - $18 / hr",
    deadline: "2026-09-11",
    link: "https://perscholas.my.site.com/careerportal/s/job-opportunity/a8rPZ00000055kDYAQ/teksystemsentry-level-helpdesk-support",
    description: "Tier 1 helpdesk support role assisting users with hardware and software troubleshooting."
  },
  {
    id: 9,
    company: "TEKsystems",
    title: "Cloud Architect (AWS/Terraform)",
    type: "Hybrid",
    location: "Irving, TX",
    pay: "$89 / hr",
    deadline: "2026-09-03",
    link: "https://perscholas.my.site.com/careerportal/s/job-opportunity/a8rPZ00000055jvYAA/teksystemscloud-architect-awsterraform-enterpri",
    description: "Cloud architecture role requiring expertise in AWS and Terraform Enterprise for infrastructure as code."
  }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);

  // Filter jobs based on search term and selected type
  const filteredJobs = useMemo(() => {
    return jobsData.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            job.company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === "All" || job.type === filterType;
      
      return matchesSearch && matchesType;
    }).sort((a, b) => new Date(a.deadline) - new Date(b.deadline)); // Sort by deadline earliest first
  }, [searchTerm, filterType]);

  // Format date helper
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Calculate days remaining
  const getDaysRemaining = (dateString) => {
    const today = new Date('2026-09-02'); // Using the current prompt date as reference
    const deadline = new Date(dateString);
    const diffTime = Math.abs(deadline - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
    if (deadline < today) return "Closed";
    if (diffDays === 0) return "Ends Today";
    return `${diffDays} days left`;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-blue-700 text-white shadow-lg sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                <Briefcase className="h-8 w-8" />
                DFW Tech Job Board
              </h1>
              <p className="text-blue-100 mt-1">Remote & Hybrid opportunities in Dallas-Fort Worth</p>
            </div>
            
            {/* Search and Filter Controls */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-lg leading-5 bg-blue-800 text-white placeholder-blue-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:placeholder-gray-400 sm:text-sm transition-colors duration-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center bg-blue-800 rounded-lg p-1">
                <Filter className="h-4 w-4 text-blue-300 ml-2 mr-1" />
                <select
                  className="bg-transparent text-white border-none focus:ring-0 text-sm py-1 pr-8 cursor-pointer outline-none"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  <option value="All" className="text-gray-900">All Types</option>
                  <option value="Remote" className="text-gray-900">Remote</option>
                  <option value="Hybrid" className="text-gray-900">Hybrid</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-between items-center text-gray-600">
          <p>Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'}</p>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
            <Briefcase className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No jobs found</h3>
            <p className="text-gray-500 mt-1">Try adjusting your search or filters.</p>
            <button 
              onClick={() => {setSearchTerm(""); setFilterType("All");}}
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div 
                key={job.id} 
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col h-full cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      job.type === 'Remote' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {job.type}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      getDaysRemaining(job.deadline).includes('Today') || getDaysRemaining(job.deadline).includes('1 days') 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {getDaysRemaining(job.deadline)}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">{job.title}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-4">{job.company}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <DollarSign className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{job.pay}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Deadline: {formatDate(job.deadline)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 mt-auto">
                  <button 
                    className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedJob(job);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" 
              aria-hidden="true"
              onClick={() => setSelectedJob(null)}
            ></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            {/* Modal panel */}
            <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <h3 className="text-2xl leading-6 font-bold text-gray-900" id="modal-title">
                      {selectedJob.title}
                    </h3>
                    <p className="text-lg text-blue-600 font-medium mt-1">{selectedJob.company}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedJob(null)}
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <span className="sr-only">Close</span>
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    selectedJob.type === 'Remote' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {selectedJob.type} Position
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    <MapPin className="h-3 w-3 mr-1" /> {selectedJob.location}
                  </span>
                </div>

                <div className="bg-gray-50 rounded-xl p-5 mb-6 border border-gray-100">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Job Overview</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1 flex items-center gap-1"><DollarSign className="h-4 w-4"/> Compensation</p>
                      <p className="font-medium text-gray-900">{selectedJob.pay}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1 flex items-center gap-1"><Calendar className="h-4 w-4"/> Application Deadline</p>
                      <p className="font-medium text-gray-900">
                        {formatDate(selectedJob.deadline)} 
                        <span className="ml-2 text-sm text-red-600">({getDaysRemaining(selectedJob.deadline)})</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedJob.description}
                  </p>
                  <p className="text-sm text-gray-500 mt-4 italic">
                    Note: Full job descriptions and application instructions are available on the official listing page.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6 sm:flex sm:flex-row-reverse border-t border-gray-200">
                <a 
                  href={selectedJob.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm items-center gap-2 transition-colors"
                >
                  Apply Now <ExternalLink className="h-4 w-4" />
                </a>
                <button 
                  type="button" 
                  onClick={() => setSelectedJob(null)}
                  className="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}