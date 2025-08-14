'use client'

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxShowcase() {
  const [checkboxStates, setCheckboxStates] = useState({
    default: false,
    checked: true,
    indeterminate: false,
    disabledUnchecked: false,
    disabledChecked: true,
    noLabel: false
  })

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setCheckboxStates(prev => ({
      ...prev,
      [name]: checked
    }))
  }

  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
      <h2>Checkboxes</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Checkbox 
          name="default"
          label="Default unchecked" 
          checked={checkboxStates.default}
          onChange={handleCheckboxChange}
        />
        <Checkbox 
          name="checked"
          label="Default checked" 
          checked={checkboxStates.checked}
          onChange={handleCheckboxChange}
        />
        <Checkbox 
          name="indeterminate"
          label="Indeterminate" 
          checked={checkboxStates.indeterminate}
          indeterminate={!checkboxStates.indeterminate}
          onChange={handleCheckboxChange}
        />
        <Checkbox 
          name="disabledUnchecked"
          label="Disabled unchecked" 
          checked={checkboxStates.disabledUnchecked}
          disabled 
        />
        <Checkbox 
          name="disabledChecked"
          label="Disabled checked" 
          checked={checkboxStates.disabledChecked}
          disabled 
        />
        <Checkbox 
          name="noLabel"
          checked={checkboxStates.noLabel}
          onChange={handleCheckboxChange}
        />
      </div>
    </section>
  )
}
