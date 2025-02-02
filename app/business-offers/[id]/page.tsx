import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileSpreadsheet, FileIcon as FilePresentation, FileBarChart, FileText } from "lucide-react"
import { ArrowRight } from "lucide-react"

// Mock data for a business offer
const offer = {
  id: 1,
  title: "AI-Powered Healthcare Solutions",
  description: `Our AI-Powered Healthcare Solutions project aims to revolutionize the healthcare industry by leveraging cutting-edge artificial intelligence technologies for early disease detection and personalized treatment plans. By combining machine learning algorithms with vast medical databases, we're developing a system that can analyze patient data, identify potential health risks, and suggest tailored interventions with unprecedented accuracy and speed.

  This innovative platform will not only assist healthcare professionals in making more informed decisions but also empower patients to take proactive measures in managing their health. Our solution encompasses a range of applications, from predictive analytics for chronic disease management to real-time monitoring of patient vitals in critical care settings. With the potential to significantly reduce healthcare costs, improve patient outcomes, and alleviate the burden on healthcare systems worldwide, our AI-Powered Healthcare Solutions represent a transformative leap forward in medical technology.`,
  investmentSize: "$5,000,000 - $10,000,000",
  sharesOffered: "15% equity",
  roiPlan: "Projected 25% annual return over 5 years",
  timeline: "24 months to market launch, 5-year growth plan",
  security: "Secured against company's intellectual property and future revenue",
  partnershipType: "Equity Partnership",
  investmentTerm: "5 years with optional buy-back after 3 years",
  companyProfile: "HealthTech Innovations Inc., founded in 2020, specializes in AI-driven healthcare solutions.",
  management: [
    {
      name: "Dr. Jane Smith",
      role: "CEO",
      bio: "Dr. Jane Smith has over 20 years of experience in healthcare technology. She holds a Ph.D. in Biomedical Engineering from MIT and an MBA from Harvard Business School. Prior to founding HealthTech Innovations Inc., she led the AI research division at a major pharmaceutical company. Dr. Smith is a frequent speaker at international conferences and has published numerous papers on AI applications in healthcare.",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/drjanesmith",
        twitter: "https://twitter.com/drjanesmith",
      },
    },
    {
      name: "John Doe",
      role: "CTO",
      bio: "John Doe is a former Google AI researcher with a strong background in machine learning and data science. He holds a Master's degree in Computer Science from Stanford University. At Google, John worked on developing AI models for healthcare applications. He has been instrumental in creating HealthTech Innovations' core AI algorithms and has several patents to his name.",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
      },
    },
  ],
  documents: [
    { name: "Pitch Deck", url: "/documents/pitch-deck.pdf" },
    { name: "Financial Projections", url: "/documents/financials.pdf" },
    { name: "Market Analysis", url: "/documents/market-analysis.pdf" },
    { name: "Company Registration Certificate", url: "/documents/company-registration.pdf" },
    { name: "GST Certificate", url: "/documents/gst-certificate.pdf" },
    { name: "ROC Details", url: "/documents/roc-details.pdf" },
  ],
  images: ["/images/ai-healthcare-1.jpg", "/images/ai-healthcare-2.jpg", "/images/ai-healthcare-3.jpg"],
  videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  presentationLink: "https://www.slideshare.net/example/ai-healthcare-presentation",
}

export default function BusinessOfferPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto py-8">
      <div className="bg-[#1f1b3d] text-white p-4 mb-8 flex justify-between items-center rounded-lg">
        <h1 className="text-2xl font-bold">{offer.title}</h1>
        <div className="space-x-2">
          <Button variant="secondary">Invest Now</Button>
          <Button variant="secondary">Connect Now</Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Project Description</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {offer.description.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Industry Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Industry Growth"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <p>
                  The AI in healthcare market is experiencing rapid growth, with a projected CAGR of 38.4% from 2022 to
                  2030. This growth is driven by increasing adoption of AI technologies in diagnostics, drug discovery,
                  and personalized medicine.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="International Opportunities in Healthcare"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <p>
                  AI-powered healthcare solutions are gaining traction globally, with significant opportunities in
                  emerging markets. Countries like China, India, and Brazil are investing heavily in AI healthcare
                  infrastructure, creating new avenues for expansion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Global Demand</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Global Demand"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <p>
                  The global demand for AI in healthcare is surging, driven by the need for efficient, accurate, and
                  personalized medical solutions. The COVID-19 pandemic has further accelerated this trend, highlighting
                  the importance of AI in disease prediction, treatment, and resource allocation.
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="details" className="mt-8">
            <TabsList>
              <TabsTrigger value="details">Project Details</TabsTrigger>
              <TabsTrigger value="company">Company Profile</TabsTrigger>
              <TabsTrigger value="management">Management</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            <TabsContent value="details">
              <Card>
                <CardContent className="pt-6">
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Investment Size</TableCell>
                        <TableCell>{offer.investmentSize}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Shares Offered</TableCell>
                        <TableCell>{offer.sharesOffered}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">ROI Plan</TableCell>
                        <TableCell>{offer.roiPlan}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Timeline</TableCell>
                        <TableCell>{offer.timeline}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Security for Investment</TableCell>
                        <TableCell>{offer.security}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Partnership Type</TableCell>
                        <TableCell>{offer.partnershipType}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Investment Term</TableCell>
                        <TableCell>{offer.investmentTerm}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="company">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p>
                      HealthTech Innovations Inc., founded in 2020, is at the forefront of AI-driven healthcare
                      solutions. Our mission is to revolutionize patient care and medical diagnostics through
                      cutting-edge artificial intelligence and machine learning technologies. With a team of world-class
                      data scientists, medical professionals, and software engineers, we are developing innovative
                      platforms that promise to transform the healthcare landscape.
                    </p>
                    <p>
                      Since our inception, we have made significant strides in creating AI algorithms that can detect
                      early signs of diseases, predict patient outcomes, and personalize treatment plans. Our flagship
                      product, AIHealth Analyzer, has already been adopted by several leading hospitals and has shown
                      remarkable accuracy in early disease detection. As we continue to grow and expand our product
                      offerings, we remain committed to our vision of making healthcare more efficient, accurate, and
                      accessible through the power of AI.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="management">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {offer.management.map((member, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <Image
                          src={`https://i.pravatar.cc/150?img=${index + 1}`}
                          alt={member.name}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                          <p className="text-sm mb-2">{member.bio}</p>
                          <div className="flex space-x-2">
                            {member.socialMedia.linkedin && (
                              <Link href={member.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                                <svg
                                  className="w-5 h-5 text-blue-500"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </Link>
                            )}
                            {member.socialMedia.twitter && (
                              <Link href={member.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                                <svg
                                  className="w-5 h-5 text-blue-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                >
                                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                              </Link>
                            )}
                            {member.socialMedia.github && (
                              <Link href={member.socialMedia.github} target="_blank" rel="noopener noreferrer">
                                <svg
                                  className="w-5 h-5 text-gray-800"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="documents">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">Financial Documents</h3>
                      <ul className="space-y-2">
                        {offer.documents
                          .filter(
                            (doc) =>
                              doc.name.toLowerCase().includes("financial") ||
                              doc.name.toLowerCase().includes("projections"),
                          )
                          .map((doc, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <FileSpreadsheet className="h-5 w-5 text-blue-500" />
                              <Link href={doc.url} className="text-blue-600 hover:underline">
                                {doc.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Legal Documents</h3>
                      <ul className="space-y-2">
                        {offer.documents
                          .filter(
                            (doc) =>
                              doc.name.toLowerCase().includes("registration") ||
                              doc.name.toLowerCase().includes("gst") ||
                              doc.name.toLowerCase().includes("roc"),
                          )
                          .map((doc, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <FileText className="h-5 w-5 text-green-500" />
                              <Link href={doc.url} className="text-blue-600 hover:underline">
                                {doc.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Presentations</h3>
                      <ul className="space-y-2">
                        {offer.documents
                          .filter(
                            (doc) =>
                              doc.name.toLowerCase().includes("pitch") ||
                              doc.name.toLowerCase().includes("presentation"),
                          )
                          .map((doc, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <FilePresentation className="h-5 w-5 text-purple-500" />
                              <Link href={doc.url} className="text-blue-600 hover:underline">
                                {doc.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Other Documents</h3>
                      <ul className="space-y-2">
                        {offer.documents
                          .filter(
                            (doc) =>
                              !doc.name.toLowerCase().includes("financial") &&
                              !doc.name.toLowerCase().includes("projections") &&
                              !doc.name.toLowerCase().includes("pitch") &&
                              !doc.name.toLowerCase().includes("presentation") &&
                              !doc.name.toLowerCase().includes("registration") &&
                              !doc.name.toLowerCase().includes("gst") &&
                              !doc.name.toLowerCase().includes("roc"),
                          )
                          .map((doc, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <FileText className="h-5 w-5 text-gray-500" />
                              <Link href={doc.url} className="text-blue-600 hover:underline">
                                {doc.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Project Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
                  "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                ].map((image, index) => (
                  <div key={index} className="relative h-48">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Project image ${index + 1}`}
                      fill
                      className="rounded-lg object-cover"
                    />
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black bg-opacity-50 px-1 rounded">
                      Photo from Pexels
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Project Video</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${offer.videoLink.split("v=")[1]}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Project Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {offer.documents.map((doc, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    {doc.name.toLowerCase().includes("financial") || doc.name.toLowerCase().includes("projections") ? (
                      <FileSpreadsheet className="h-5 w-5 text-blue-500" />
                    ) : doc.name.toLowerCase().includes("pitch") || doc.name.toLowerCase().includes("presentation") ? (
                      <FilePresentation className="h-5 w-5 text-green-500" />
                    ) : doc.name.toLowerCase().includes("analysis") || doc.name.toLowerCase().includes("report") ? (
                      <FileBarChart className="h-5 w-5 text-purple-500" />
                    ) : (
                      <FileText className="h-5 w-5 text-gray-500" />
                    )}
                    <Link href={doc.url} className="text-blue-600 hover:underline">
                      {doc.name}
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-x-2">
            <Button variant="secondary">Invest Now</Button>
            <Button variant="secondary">Connect Now</Button>
          </div>
        </div>
      </div>
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Similar Projects to Invest</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "MedTech Innovations",
              description: "AI-driven medical diagnosis platform",
              image:
                "https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
            {
              title: "BioTech Solutions",
              description: "Gene therapy breakthroughs",
              image:
                "https://images.pexels.com/photos/8325710/pexels-photo-8325710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
            {
              title: "HealthData Analytics",
              description: "Big data solutions for healthcare",
              image:
                "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
          ].map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="relative h-48 mb-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

