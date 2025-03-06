import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatDate = (dateString) => {
    // primeiro converter a string para um objeto tipo Date para usar a função
    const date = new Date(dateString)
    return format(date, 'dd/MM/yyyy', { locale: ptBR });
}