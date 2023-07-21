import React, { PureComponent } from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const ApplicantStageGraph = () => {
    const applicants = useSelector(state => state.login.user.applicants)

    const newApplicants = applicants.filter(applicant => applicant.status === 'New')
    const lvmApplicants = applicants.filter(applicant => applicant.status === 'Left Voicemail')
    const pssApplicants = applicants.filter(applicant => applicant.status === 'Phone Screen')
    const assessmentApplicants = applicants.filter(applicant => applicant.status === 'Assessment')
    const fciApplicants = applicants.filter(applicant => applicant.status === 'First Interview')
    const sciApplicants = applicants.filter(applicant => applicant.status === 'Second Interview')
    const tciApplicants = applicants.filter(applicant => applicant.status === 'Third Interview')


    const data = [
        {
          name: 'New',
          'Applicant Count': newApplicants.length,
        },
        {
            name: 'LVM',
            'Applicant Count': lvmApplicants.length,
          },
          {
            name: 'RPS Scheduled',
            'Applicant Count': pssApplicants.length,
          },
          {
            name: 'Assessment',
            'Applicant Count': assessmentApplicants.length,
          },
          {
            name: '1st Interview',
            'Applicant Count': fciApplicants.length,
          },
          {
            name: '2nd interview',
            'Applicant Count': sciApplicants.length,
          },
          {
            name: '3rd Interview',
            'Applicant Count': tciApplicants.length,
          },
      ];
    
      return (
        <div>
            <ResponsiveContainer width='95%' height={200}>
                <BarChart
                    width="100%"
                    height={300}
                    data={data}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                    }}
                >
                    <CartesianGrid />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Applicant Count" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
      );
    }