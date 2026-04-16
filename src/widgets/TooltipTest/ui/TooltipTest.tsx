import { Tooltip } from "shared/ui";

export const TooltipTest = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', fontSize: '14px'}} onClick={() => console.log('click!')}>
      <Tooltip text="Tooltip text123">Hover this</Tooltip>
      <Tooltip text="Tooltip 2">Наведи мышь</Tooltip>
      Test for click!
    </div>
  );
}
