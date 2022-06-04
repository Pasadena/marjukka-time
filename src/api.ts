export const makeReservation = async (startTime: string) => {
  const response = await fetch(
    "https://9bc8zpr105.execute-api.eu-west-1.amazonaws.com/marjukanaika-mailsender",
    {
      method: "POST",
      body: JSON.stringify({ time: startTime }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error(`Cannot make reservation: ${response.statusText}`);
  }
};
