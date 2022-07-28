import React from 'react';

const OptionComponent = ({ isSmallSize = false, optionName }) => {
  const block = isSmallSize ? 'block' : '';
  const styleOption = `text-gray-100 hover:bg-gray-700 hover:text-white ${block} px-3 py-2 rounded-md text-base font-normal`;

  const sectionName = optionName.toLowerCase();
  const sectionHref = `/#${sectionName}`;
  return (
    <a href={sectionHref} className={styleOption}>
      {optionName}
    </a>
  );
};

export default OptionComponent;
