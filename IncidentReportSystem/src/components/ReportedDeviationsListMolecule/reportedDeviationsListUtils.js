/* const dataRows = [
  {
    id: 1,
    actionBy: "Mike",
    causes: "Coolar is simply",
    date: "1980-12-09-7414",
    status: "Ongoing",
    handler: "Jazzy B",
    station: "Report in process",
    symptoms: "Keep it clean",
  },
  {
    id: 2,
    actionBy: "Robert",
    causes: "Laptop is broken",
    date: "2019-03-08-2994",
    status: "Ongoing",
    handler: "David K",
    station: "Hold it now",
    symptoms: "Its going off",
  },
  {
    id: 3,
    actionBy: "Zuzu",
    causes: "Floor is Wet",
    date: "2018-01-05-7144",
    status: "Ongoing",
    handler: "Kim T",
    station: "Report in process",
    symptoms: "Well Organized",
  },
  {
    id: 4,
    actionBy: "Tina",
    causes: "screen is simply",
    date: "2009-11-05-5544",
    status: "Ongoing",
    handler: "Nora W",
    station: "Poor view",
    symptoms: "Ordered new screen",
  },
  {
    id: 5,
    actionBy: "Omer",
    causes: "Button is simply",
    date: "2008-11-05-1231",
    status: "Ongoing",
    handler: "Trump G",
    station: "Easy installment",
    symptoms: "Pick it up",
  },
]; */

/* 
export const getDaysSince = (dateString) => {
  const incidentDate = new Date(dateString);
  const today = new Date();

  const diffTime =
    today.setHours(0, 0, 0, 0) - incidentDate.setHours(0, 0, 0, 0);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Day 1";
  return `Day ${diffDays}`;
}; */
export const getDaysSince = (dateString) => {
  if (!dateString || dateString === "—") return "—";
  const incidentDate = new Date(dateString);
  if (isNaN(incidentDate)) return " ";

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  incidentDate.setHours(0, 0, 0, 0);

  const diffTime = today - incidentDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return `Day ${diffDays}`;
};

export const statusStyles = {
  New: {
    bg: "#D1E9FF",
    dot: "#1E88E5",
    text: "New",
  },
  Archived: {
    bg: "#D5D7DA",
    dot: "#616161",
    text: "Archived",
  },
  InProgress: {
    bg: "#FFECD2",
    dot: "#FB8C00",
    text: "In progress",
  },
  Finished: {
    bg: "#D1FADF",
    dot: "#43A047",
    text: "Finished",
  },
};

export const isArchived = (row, archiveList) =>
  Array.isArray(archiveList) &&
  archiveList.some((archivedRow) => archivedRow.id === row.id);
