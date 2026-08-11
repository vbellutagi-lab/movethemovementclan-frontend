import { client } from "../data/client";
import { ICONS } from "./icons";

export function SyncStrip() {
  return (
    <div className="mvStrip">
      <div className="mv-max row">
        {client.syncStrip.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <div className="item" key={item.title}>
              {Icon ? <Icon size={20} /> : null}
              <div>
                <span className="t">{item.title}</span>
                <span className="d">{item.detail}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
