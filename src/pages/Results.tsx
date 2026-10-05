import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Search, FileText } from "lucide-react";

export const getResultLookupMessage = (rollNo: string) =>
  rollNo.trim()
    ? "Live result lookup is not available in this demo. Please use the official BBISE result service to verify your marks."
    : "";

const Results = () => {
  const [rollNo, setRollNo] = useState("");
  const [examType, setExamType] = useState("ssc");
  const [searchMessage, setSearchMessage] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchMessage(getResultLookupMessage(rollNo));
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

          {searchMessage && (
            <p role="status" className="mb-8 rounded-lg border bg-muted p-4 text-sm text-muted-foreground">
              {searchMessage}
            </p>
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
