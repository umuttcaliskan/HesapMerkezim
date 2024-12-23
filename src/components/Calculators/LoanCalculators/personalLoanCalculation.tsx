import React, { useState } from 'react';

// Kredi hesaplama fonksiyonu
const calculateLoan = (amount: number, interestRate: number, term: number) => {
  const monthlyInterestRate = interestRate / 100 / 12;

  if (monthlyInterestRate === 0) {
    return {
      monthlyPayment: amount / term,
      totalRepayment: amount,
    };
  }

  const monthlyPayment =
    (amount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -term));
  const totalRepayment = monthlyPayment * term;
  return { monthlyPayment, totalRepayment };
};

// Ödeme tablosu hesaplama fonksiyonu
const calculatePaymentSchedule = (amount: number, interestRate: number, term: number, monthlyPayment: number) => {
  const monthlyInterestRate = interestRate / 100 / 12;
  let remainingBalance = amount;
  const schedule = [];

  for (let month = 1; month <= term; month++) {
    const interestPayment = remainingBalance * monthlyInterestRate;
    const principalPayment = monthlyPayment - interestPayment;
    remainingBalance -= principalPayment;

    schedule.push({
      month,
      interestPayment,
      principalPayment,
      remainingBalance: remainingBalance > 0 ? remainingBalance : 0,
    });
  }

  return schedule;
};

const PersonalLoanCalculation = () => {
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [term, setTerm] = useState<number>(12);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalRepayment, setTotalRepayment] = useState<number | null>(null);
  const [annualCostRate, setAnnualCostRate] = useState<number | null>(null);
  const [monthlyCostRate, setMonthlyCostRate] = useState<number | null>(null);
  const [paymentSchedule, setPaymentSchedule] = useState<any[]>([]);
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (loanAmount <= 0 || interestRate < 0 || term <= 0) {
      setError('Lütfen geçerli bir değer girin.');
      return;
    }

    setError('');
    const { monthlyPayment, totalRepayment } = calculateLoan(loanAmount, interestRate, term);

    setMonthlyPayment(monthlyPayment);
    setTotalRepayment(totalRepayment);

    // Aylık ve yıllık maliyet oranını hesaplama
    const monthlyRate = (interestRate / 100) / 12;
    setMonthlyCostRate(monthlyRate * 100); // Aylık maliyet oranı (faiz oranı)
    
    // Yıllık maliyet oranı hesaplama (yıllık faiz)
    const annualRate = monthlyRate * 12;
    setAnnualCostRate(annualRate * 100); // Yıllık maliyet oranı

    // Ödeme tablosu hesaplama
    const schedule = calculatePaymentSchedule(loanAmount, interestRate, term, monthlyPayment);
    setPaymentSchedule(schedule);
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Kredi Hesaplayıcı</h2>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
            Kredi Tutarı (₺)
          </label>
          <input
            type="number"
            id="loanAmount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            placeholder="Kredi Tutarını Girin"
            min="1"
          />
        </div>

        <div>
          <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">
            Faiz Oranı (%)
          </label>
          <input
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            placeholder="Faiz Oranını Girin"
            min="0"
          />
        </div>

        <div>
          <label htmlFor="term" className="block text-sm font-medium text-gray-700">
            Vade (Ay)
          </label>
          <input
            type="number"
            id="term"
            value={term}
            onChange={(e) => setTerm(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            placeholder="Vade Süresini Girin"
            min="1"
          />
        </div>

        <div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
            Hesapla
          </button>
        </div>
      </form>

      {monthlyPayment !== null && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Kredi Bilgileri</h3>
          <ul className="space-y-2">
            <li><strong>Kredi Tutarı:</strong> {loanAmount.toFixed(2)} ₺</li>
            <li><strong>Faiz Oranı:</strong> {interestRate.toFixed(2)} %</li>
            <li><strong>Vade:</strong> {term} Ay</li>
            <li><strong>Taksit Tutarı:</strong> {monthlyPayment.toFixed(2)} ₺</li>
            <li><strong>Toplam Geri Ödenecek Tutar:</strong> {totalRepayment!.toFixed(2)} ₺</li>
            <li><strong>Aylık Maliyet Oranı:</strong> {monthlyCostRate!.toFixed(4)} %</li>
            <li><strong>Yıllık Maliyet Oranı:</strong> {annualCostRate!.toFixed(4)} %</li>
          </ul>
        </div>
      )}

      {paymentSchedule.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Ödeme Tablosu</h3>
          <table className="min-w-full table-auto mt-4 border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">Ay</th>
                <th className="px-4 py-2 border">Faiz Ödemesi (₺)</th>
                <th className="px-4 py-2 border">Anapara Ödemesi (₺)</th>
                <th className="px-4 py-2 border">Kalan Borç (₺)</th>
              </tr>
            </thead>
            <tbody>
              {paymentSchedule.map((payment) => (
                <tr key={payment.month} className="text-center">
                  <td className="px-4 py-2 border">{payment.month}</td>
                  <td className="px-4 py-2 border">{payment.interestPayment.toFixed(2)}</td>
                  <td className="px-4 py-2 border">{payment.principalPayment.toFixed(2)}</td>
                  <td className="px-4 py-2 border">{payment.remainingBalance.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PersonalLoanCalculation;
