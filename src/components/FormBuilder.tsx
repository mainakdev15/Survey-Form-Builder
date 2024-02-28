"use client";

import React from "react";
import { Form } from "@prisma/client";
import PreviewDialogueButton from "./PreviewDialogueButton";
import PublishFormButton from "./PublishFormButton";
import SaveFormButton from "./SaveFormButton";
import { DndContext } from "@dnd-kit/core";

function FormBuilder({ form }: { form: Form }) {
  return (
    <DndContext>
      <main>
        <div>
          <h2>Form</h2>
          <div>
            <PreviewDialogueButton />
            {!form.published && (
              <>
                <SaveFormButton />
                <PublishFormButton />
              </>
            )}
          </div>
        </div>
      </main>
    </DndContext>
  );
}

export default FormBuilder;
