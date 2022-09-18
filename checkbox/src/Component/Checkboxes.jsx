import React from 'react';
// import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
const Checkboxes = () => {
  // const [checkedItems, setCheckedItems] = React.useState([false, false]);

  // const allChecked = checkedItems.every(Boolean);
  // const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  const handleChnage = (e) => {
    e.target.value = !e.target.value;
    console.log(e.target.value);
  };
  return (
    <div>
      Checkboxes
      {/* <div>
        <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) =>
            setCheckedItems([e.target.checked, e.target.checked,e.target.checked,e.target.checked])
          }>
          Parent Checkbox
        </Checkbox>
        <div pl={6} mt={1} spacing={1}>
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) =>
              setCheckedItems([e.target.checked, checkedItems[1]])
            }>
            Child Checkbox 1
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) =>
              setCheckedItems([checkedItems[0], e.target.checked])
            }>
            Child Checkbox 2
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[2]}
            onChange={(e) =>
              setCheckedItems([checkedItems[4], e.target.checked])
            }>
            Child Checkbox 2
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[3]}
            onChange={(e) =>
              setCheckedItems([checkedItems[3], e.target.checked])
            }>
            Child Checkbox 2
          </Checkbox>
        </div>
      </div> */}
      <input type={'checkbox'} value='false' onClick={handleChnage} />
      parent1
      <input type={'checkbox'} value='parent2' />
      parent2
      <input type={'checkbox'} value='parent3' />
      parent3
      <input type={'checkbox'} value='parent4' />
      parent4
      <input type={'checkbox'} value='parent5' />
      parent5
    </div>
  );
};

export default Checkboxes;
