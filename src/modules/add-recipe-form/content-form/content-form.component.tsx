import { Button, Checkbox, FormControlLabel } from "@mui/material";
import classNames from "classnames";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import AutoSizeTextInput from "../../../common/components/auto-size-textarea.component";
import { MarkedConverter } from "../../../common/components/marked-converter";
import { FormValues } from "../add-recipe-form.component";

type Props = {
  form: UseFormReturn<FormValues, any, any>;
  contentWatch: string;
};

const ContentForm = ({ form, contentWatch }: Props) => {
  const showMarkedText = form.watch("showMarkedText");

  return (
    <div className='grid md:grid-cols-2 grid-rows-1 gap-x-2 h-auto mt-14'>
      <AutoSizeTextInput
        name='content'
        control={form.control}
        rules={{
          validate: undefined,
        }}
        label='Spsób przygotowania'
      />
      <div className='md:hidden'>
        <FormControlLabel
          control={<Checkbox {...form.register("showMarkedText")} />}
          label='Pokaż przekonwertowany text'
        />
      </div>
      <div
        className={classNames("pt-2  md:block", {
          block: showMarkedText,
          hidden: !showMarkedText,
        })}>
        <MarkedConverter val={contentWatch} />
      </div>
    </div>
  );
};

export default ContentForm;
