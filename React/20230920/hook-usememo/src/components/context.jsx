import { createContext } from "react";

// 분리된 컴포넌트에서 context에 접근하고자 할때 별도의 컨텍스트 전용 파일을 만들어두시면 편하게 사용할 수 있습니다.

/* 여기서 export 할 경우 import 할 때 {} 써줘야 함 */
const UserInfo = createContext({ name: 'Licat', id: 'LicatIsNotFree' });

export default UserInfo; /* import 할 때 {}가 필요 없음 */