import React from "react";
import FilterPanel from "./FilterPanel";

export default {
  title: "Components/FilterPanel",
  component: FilterPanel,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <FilterPanel {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClose: () => console.log("closed"),
  onApply: (filters) => console.log("apply", filters),
};

export const InvalidDateRange = Template.bind({});
InvalidDateRange.args = {
  ...Default.args,
  initialFilters: {
    dateRange: { from: "2025-01-10", to: "2025-01-01" },
  },
};

export const StationWithoutDistrict = Template.bind({});
StationWithoutDistrict.args = {
  ...Default.args,
  initialFilters: {
    station: "Station1",
  },
};

export const FullyFilled = Template.bind({});
FullyFilled.args = {
  ...Default.args,
  initialFilters: {
    dateRange: { from: "2025-01-01", to: "2025-01-10" },
    district: "District1",
    station: "Station1",
    priority: "High",
    status: "Open",
    sorting: "Ascending",
    sortBy: "Priority",
  },
};

export const AllFiltersSet = Template.bind({});
AllFiltersSet.args = {
  ...Default.args,
  initialFilters: {
    dateRange: { from: "2025-01-01", to: "2025-12-31" },
    district: "District2",
    station: "Station2",
    priority: "Medium",
    status: "Open",
    sorting: "Ascending",
    sortBy: "Priority",
  },
};

export const SimulatedScrollOverflow = Template.bind({});
SimulatedScrollOverflow.args = {
  ...AllFiltersSet.args,
};
SimulatedScrollOverflow.parameters = {
  layout: "padded",
  viewport: {
    defaultViewport: "iphone6",
  },
};

export const PreFilledThenClear = Template.bind({});
PreFilledThenClear.args = {
  ...AllFiltersSet.args,
};
