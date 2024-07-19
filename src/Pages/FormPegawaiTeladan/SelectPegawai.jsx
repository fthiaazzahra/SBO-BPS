// SelectPegawai.js
import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'diyah', label: 'Diyah Citra Ayu Kurnia Sukma, S.E., M.Si' },
  { value: 'iis', label: 'Iis Irmawati, A.Md' },
  { value: 'ika', label: 'Ika Nuryani, SST, M.Stat.' }
];

export default function SelectPegawai({ selectedCandidate, setSelectedCandidate }) {
  const handleCandidateChange = selectedOption => {
    setSelectedCandidate(selectedOption);
  };

  return (
    <div className="form-group">
      <label htmlFor="pegawaiSelect">Pilih Pegawai:</label>
      <Select
        id="pegawaiSelect"
        value={selectedCandidate}
        onChange={handleCandidateChange}
        options={options}
        placeholder="Pilih Pegawai"
      />
    </div>
  );
}
