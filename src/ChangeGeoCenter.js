import React from "react";
import Select from "react-select";
import { withSearch } from "@elastic/react-search-ui";

const options = [
  { value: "40.7128, -74.0060", label: "New York" },
  { value: "41.8781, -87.6298", label: "Chicago" },
  { value: "39.7392, -104.9903", label: "Denver" },
  { value: "37.7749, -122.4194", label: "San Francisco" }
];

class ChangeGeocenter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectedOption) {
    const { onGeocenterChange } = this.props;
    onGeocenterChange(selectedOption);
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    // We pass both geoCenter and onGeocenterChange to "lift" that state so it is completely managed outside of this
    // component
    const { geocenter } = this.props;
    return (
      <div className="sui-facet">
        <legend className="sui-facet__title">City Center</legend>
        <Select
          className="sui-select"
          value={geocenter}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}

export default withSearch(
  ({ ChangeGeocenter, setSearchTerm, resultSearchTerm }) => ({
    setSearchTerm,
    resultSearchTerm,
    ChangeGeocenter
  })
)(ChangeGeocenter);
