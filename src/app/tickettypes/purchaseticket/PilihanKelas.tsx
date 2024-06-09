'use client'
import React, { useImperativeHandle, forwardRef, useState } from 'react';
import PsyTag from '@/app/components/PsyTag';
import KelasCheckBox from '../../components/KelasCheckBox';

interface CheckboxGroupHandles {
  validate: () => boolean;
}

interface CheckboxGroupProps {
  labels: { id: string; label: string }[];
  checkedItems: { [key: string]: number }; // Checked items state
  setCheckedItems: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>; // State setter function
}

const CheckboxGroup = forwardRef<CheckboxGroupHandles, CheckboxGroupProps>(({ labels, checkedItems, setCheckedItems }, ref) => {
  const [showError, setShowError] = useState(false);
  useImperativeHandle(ref, () => ({
    validate: () => {
      const isValid = Object.keys(checkedItems).length > 0;
      setShowError(!isValid)
      return isValid;
    }
  }));

  const handleCheckboxChange = (id: string, isChecked: boolean) => {
    setCheckedItems((prev) => {
      const newCheckedItems = { ...prev };

      if (isChecked) {
        if (!newCheckedItems[id] && Object.keys(newCheckedItems).length < 3) {
          const nextOrder = Object.keys(newCheckedItems).length + 1;
          newCheckedItems[id] = nextOrder;
        }
      } else {
        if (newCheckedItems[id]) {
          const removedOrder = newCheckedItems[id];
          delete newCheckedItems[id];

          Object.keys(newCheckedItems).forEach((key) => {
            if (newCheckedItems[key] > removedOrder) {
              newCheckedItems[key] -= 1;
            }
          });
        }
      }

      return newCheckedItems;
    });
  };

  return (
    <div className='flex flex-col'>
      <div className='flex relative top-[9vh] sm:top-[12vh] md:top-[13vh] lg:top-[15vh] xl:top-[18vh] justify-center'>
        <img src="/ticket/pilihankelas/pilihan-kelas-text.svg" alt="Pilihan Kelas Text" className='sm:visible invisible absolute sm:static'/>
        <img src="/ticket/pilihankelas/mobile/pilihan-kelas-text.svg" alt="Pilihan Kelas Text" className='sm:absolute visible sm:invisible'/>
      </div>

      <div className='flex relative top-[10vh] sm:top-[17vh] md:top-[18vh] lg:top-[20vh] xl:top-[23vh] justify-center'>
        <div className='flex flex-col gap-y-4 min-w-fit max-w-[832px] max-h-[840px] w-fit lg:h-[500px] bg-[#FBB3D7] rounded-[20px] p-8'>
          <div className="grid md:grid-cols-2 gap-4">
            {labels.map(({ id, label }) => (
              <KelasCheckBox
                key={id}
                id={id}
                label={label}
                onChange={handleCheckboxChange}
                checkedOrder={checkedItems[id] || null}
              />
            ))}
          </div>
        {showError && (
          <div className='flex justify-center text-red-500 mt-4'>
            <p>Please select at least one option.</p>
          </div>
        )}
        </div>
      </div>
      
      <div className='flex w-full relative justify-center top-[11vh] sm:top-[20vh] md:top-[22vh] lg:top-[24vh] xl:top-[27vh]'>
        <div className='w-full px-4 sm:w-1/2 md:w-1/4 text-center font-bold'>
          <p>Note: Angka pada checkbox menunjukkan skala prioritas dari kelas yang dipilih</p>
        </div>
      </div>
      <PsyTag />
    </div>
  );
});

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;