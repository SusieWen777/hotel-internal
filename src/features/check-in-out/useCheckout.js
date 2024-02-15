import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    // data is the returning data from the mutationFn
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      // instead of using query key here, use { active: true } will invalidate all the queries that are currently active in this page
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("There is an error while checking out"),
  });

  return { checkout, isCheckingOut };
}
