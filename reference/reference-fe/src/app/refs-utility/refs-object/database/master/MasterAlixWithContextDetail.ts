import { ContextType } from 'src/app/refs-utility/refs-enum/context-type';
import { MasterAlix } from './MasterAlix';

export class MasterAlixWithContextDetail extends MasterAlix {
  contextId: string;
  contextType: ContextType;
}
