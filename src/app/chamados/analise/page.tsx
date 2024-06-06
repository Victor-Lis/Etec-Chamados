import { formatDate } from '@/utils/formatDate';
import { getTickets } from './../utils/db';
import LineGraph from './LineGraph';
import { Dataset } from '@/@types/dataset';

type TicketCount = {
  date: string;
  count: number;
};

export default async function Analise() {
  let tickets = await getTickets();

  // Group tickets by formatted start date
  const ticketsGroupedByDate = tickets.reduce((acc, ticket) => {
    if (ticket.time_end) {
      const formattedDate = formatDate(ticket.time_start);
      acc[formattedDate] = (acc[formattedDate] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  // Convert grouped data to chart-friendly format
  const labels: string[] = Object.keys(ticketsGroupedByDate);
  const datasets: Dataset[] = [
    {
      label: 'Tickets Atendidos', // Assuming "atendido" means "attended"
      borderColor: '#00ff00',
      data: Object.values(ticketsGroupedByDate),
    },
  ];

  return (
    <div>
      <LineGraph data={{ labels, datasets }} />
    </div>
  );
}
