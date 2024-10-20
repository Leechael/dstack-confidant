import { Shield, Cpu, Lock, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export interface TDXQuote {
  header: {
    version: number;
    ak_type: string;
    tee_type: string;
    qe_vendor: string;
    user_data: string;
  };
  cert_data: string;
  body: {
    tee_tcb_svn: string;
    mrseam: string;
    mrsignerseam: string;
    seamattributes: string;
    tdattributes: string;
    xfam: string;
    mrtd: string;
    mrconfig: string;
    mrowner: string;
    mrownerconfig: string;
    rtmr0: string;
    rtmr1: string;
    rtmr2: string;
    rtmr3: string;
    reportdata: string;
  };
}

export function ReportView({ report }: { report: TDXQuote }) {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Report Overview</CardTitle>
            <CardDescription>
              Key information about the analyzed report
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Shield className="mr-2 h-5 w-5 text-blue-500" />
                <span>Version: {report.header.version}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-green-500" />
                <span>AK Type: {report.header.ak_type}</span>
              </div>
              <div className="flex items-center">
                <Cpu className="mr-2 h-5 w-5 text-purple-500" />
                <span>TEE Type: {report.header.tee_type}</span>
              </div>
              <div className="flex items-center">
                <Lock className="mr-2 h-5 w-5 text-red-500" />
                <span>QE Vendor: {report.header.qe_vendor}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Body Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Attribute</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(report.body).map(([key, value]) => (
                  <TableRow key={key}>
                    <TableCell className="font-mono">{key}</TableCell>
                    <TableCell className="font-mono break-all">
                      {value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {report.cert_data ? (
          <Card>
            <CardHeader>
              <CardTitle>Certificate Data</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="font-mono break-all">{report.cert_data}</pre>
            </CardContent>
          </Card>
        ) : null}
      </div>
    </div>
  );
}
