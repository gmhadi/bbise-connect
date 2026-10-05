import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Search, FileText, Download, CheckCircle, XCircle } from "lucide-react";

const mockResult = {
  name: "Muhammad Ahmed",
  fatherName: "Muhammad Ali",
  rollNo: "123456",
  examType: "SSC Annual 2025",
  institution: "Govt. High School Quetta",
  status: "Pass" as const,
  totalMarks: 850,
  obtainedMarks: 672,
  percentage: 79.06,
  grade: "A",
  subjects: [
    { name: "English", total: 100, obtained: 78 },
    { name: "Urdu", total: 100, obtained: 85 },
    { name: "Mathematics", total: 100, obtained: 72 },
    { name: "Physics", total: 75, obtained: 58 },
    { name: "Chemistry", total: 75, obtained: 62 },
    { name: "Biology", total: 75, obtained: 65 },
    { name: "Islamiat", total: 75, obtained: 68 },
    { name: "Pak Studies", total: 75, obtained: 62 },
    { name: "Computer Science", total: 75, obtained: 55 },
    { name: "General Science", total: 100, obtained: 67 },
  ],
};

const Results = () => {
  const [searchParams] = useSearchParams();
  const [rollNo, setRollNo] = useState(searchParams.get("roll") || "");
  const [examType, setExamType] = useState("ssc");
  const [showResult, setShowResult] = useState(!!searchParams.get("roll"));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (rollNo.trim()) setShowResult(true);
  };

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Result Portal</h2>
            <p className="text-muted-foreground">Enter your roll number to view your examination results</p>
          </div>

          {/* Search form */}
          <form onSubmit={handleSearch} className="bg-card rounded-xl border p-6 mb-8 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-foreground mb-1.5">Exam Type</label>
                <select
                  value={examType}
                  onChange={(e) => setExamType(e.target.value)}
                  className="w-full px-3 py-2.5 bg-background border rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="ssc">SSC (Matric)</option>
                  <option value="hssc">HSSC (Intermediate)</option>
                  <option value="ssc_sup">SSC Supplementary</option>
                  <option value="hssc_sup">HSSC Supplementary</option>
                </select>
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-foreground mb-1.5">Roll Number</label>
                <input
                  type="text"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  placeholder="e.g. 123456"
                  className="w-full px-3 py-2.5 bg-background border rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  <Search className="w-4 h-4" /> Search Result
                </button>
              </div>
            </div>
          </form>

          {/* Result card */}
          {showResult && (
            <div className="bg-card rounded-xl border shadow-sm overflow-hidden animate-fade-in-up">
              {/* Header */}
              <div className="p-6 text-center" style={{ background: "var(--hero-gradient)" }}>
                <h3 className="font-heading text-xl font-bold text-primary-foreground">BBISE Quetta — Digital Marksheet</h3>
                <p className="text-primary-foreground/80 text-sm">{mockResult.examType}</p>
              </div>

              {/* Student info */}
              <div className="p-6 grid grid-cols-2 gap-4 border-b">
                <div>
                  <p className="text-xs text-muted-foreground">Student Name</p>
                  <p className="font-medium text-foreground">{mockResult.name}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Father's Name</p>
                  <p className="font-medium text-foreground">{mockResult.fatherName}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Roll Number</p>
                  <p className="font-medium text-foreground">{mockResult.rollNo}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Institution</p>
                  <p className="font-medium text-foreground text-sm">{mockResult.institution}</p>
                </div>
              </div>

              {/* Subjects table */}
              <div className="p-6 border-b">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted">
                        <th className="text-left py-2.5 px-3 font-medium text-foreground">Subject</th>
                        <th className="text-center py-2.5 px-3 font-medium text-foreground">Total</th>
                        <th className="text-center py-2.5 px-3 font-medium text-foreground">Obtained</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockResult.subjects.map((sub, i) => (
                        <tr key={i} className="border-b last:border-0">
                          <td className="py-2.5 px-3 text-foreground">{sub.name}</td>
                          <td className="py-2.5 px-3 text-center text-muted-foreground">{sub.total}</td>
                          <td className="py-2.5 px-3 text-center font-medium text-foreground">{sub.obtained}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Summary */}
              <div className="p-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {mockResult.status === "Pass" ? (
                    <CheckCircle className="w-10 h-10 text-success" />
                  ) : (
                    <XCircle className="w-10 h-10 text-destructive" />
                  )}
                  <div>
                    <p className="font-heading font-bold text-lg text-foreground">{mockResult.status}</p>
                    <p className="text-sm text-muted-foreground">
                      {mockResult.obtainedMarks}/{mockResult.totalMarks} — {mockResult.percentage}% — Grade {mockResult.grade}
                    </p>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                  <Download className="w-4 h-4" /> Download PDF
                </button>
              </div>
            </div>
          )}

          {/* SMS info */}
          <div className="mt-8 bg-accent rounded-xl p-6 border">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-accent-foreground mt-0.5" />
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Get Results via SMS</h4>
                <p className="text-sm text-muted-foreground">
                  Send your Roll Number to <strong className="text-foreground">80888</strong> to receive your result instantly on your mobile phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Results;
