/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { Component } from "react"

const FilterBox = ({ filterChange }) => {
  return (
    <div>
      <select
        sx={{ height: "40px", width: ["100", "140px", "180px"] }}
        onChange={filterChange}
      >
        <option value="All">All</option>
        <option value="SingleOrigin">Single Origin</option>
        <option value="FactoryRoast">Factory Roast</option>
        <option value="Chocolately">Chocolately</option>
        <option value="Tangy">Tangy</option>
        <option value="Dark">Dark</option>
      </select>
    </div>
  )
}

export default FilterBox
