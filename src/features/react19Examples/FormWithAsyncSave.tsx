import { startTransition, useActionState } from "react";

export const FormWithAsyncSave = () => {
  const [state, submit, isPending] = useActionState(async () => {
    // имитация отправки
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 'saved';
  }, 'idle');

  return (
    <>
      <input type="text" /> {/* Тут мы ничего не отправляем, поэтому не привязывал стейт к полю */}
      <button onClick={() => {
        startTransition(() => {
          submit();
        });
      }}>{state === 'idle' ? 'Save' : isPending ? 'Saving...' : state === 'saved' ? 'Saved!' : ''}</button>
    </>
  );
};
