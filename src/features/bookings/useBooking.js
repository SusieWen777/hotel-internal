import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  // To get the id from the URL
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    // by default, React query will fetch data three times. But in this case, could find data means doesn't exist and no need to fetch again
    retry: false,
  });

  return { isLoading, error, booking };
}
