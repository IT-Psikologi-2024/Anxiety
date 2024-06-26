'use client'
import React, { useImperativeHandle, forwardRef, useState } from 'react';
import PsyTag from '@/app/components/ticket/PsyTag';
import KelasCheckBox from '../../components/ticket/KelasCheckBox';
import { useFormContext } from '../../context/PurchaseContext';

interface CheckboxGroupHandles {
  validate: () => boolean;
}

interface CheckboxGroupProps {
  labels: { id: string; label: string }[];
}

const CheckboxGroup = forwardRef<CheckboxGroupHandles, CheckboxGroupProps>(({ labels }, ref) => {
  const { checkedItems, setCheckedItems } = useFormContext();
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
      <div className='flex relative mt-[9vh] sm:mt-[12vh] md:mt-[13vh] lg:mt-[15vh] xl:mt-[18vh] justify-center'>
        <img src="/ticket/pilihankelas/pilihan-kelas-text.svg" alt="Pilihan Kelas Text" className='sm:visible invisible absolute sm:static'/>
        <img src="/ticket/pilihankelas/mobile/pilihan-kelas-text.svg" alt="Pilihan Kelas Text" className='sm:absolute visible sm:invisible'/>
      </div>

      <div className='flex relative mt-[8vh] justify-center'>
        <div className='flex flex-col gap-y-4 min-w-fit w-fit bg-[#FBB3D7] rounded-[20px] p-4 sm:p-8'>
          <div className="grid gap-4 h-full">
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
      
      <div className='flex w-full relative justify-center mt-[4vh] sm:mb-[10vh]'>
        <div className='max-w-xs md:max-w-md xl:max-w-lg text-center font-bold text-shadow-white-outline'>
          <p className='text-xl drop '>Note:</p>
          <ul className='list-disc list-inside'>
            <li>Angka pada checkbox hanya menunjukkan skala prioritas dari mata kuliah yang dipilih oleh peserta.</li>
            <li>Selebihnya, keputusan mata kuliah pada simulasi kelas nanti akan ditentukan oleh panitia.</li>
          </ul>
        </div>
      </div>
      <PsyTag />
    </div>
  );
});

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;