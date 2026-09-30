import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const icons = {
  default: "/cursor.svg",
  left: "/arrowL.svg",
  right: "/arrowR.svg",
  up: "/arrowUp.svg",
} as const;

type CursorType = keyof typeof icons;

export default function Cursor() {
  const el = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!el.current || !img.current) return;

    gsap.set(el.current, { xPercent: -50, yPercent: -50 });
    const xTo = gsap.quickTo(el.current, "x", { duration: 0.25, ease: "power3" });
    const yTo = gsap.quickTo(el.current, "y", { duration: 0.25, ease: "power3" });
    let current: CursorType = "default";

    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const value = target?.closest<HTMLElement>("[data-cursor]")?.dataset.cursor;
      const type: CursorType = value && value in icons ? (value as CursorType) : "default";

      if (type === current) return;
      current = type;

      gsap.killTweensOf(img.current);
      gsap
        .timeline()
        .to(img.current, { scale: 0, rotation: -90, duration: 0.15 })
        .add(() => {
          if (img.current) img.current.src = icons[type];
        })
        .to(img.current, { scale: 1, rotation: 0, duration: 0.3, ease: "back.out(2)" });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  });

  return (
    <div ref={el} className="cursor">
      <img ref={img} src={icons.default} width={32} height={32} alt="" />
    </div>
  );
}