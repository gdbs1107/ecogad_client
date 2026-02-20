// This file defines the STRUCTURE of categories, not the product data itself.
// In a real app, this might also come from an API, but for now, it's static structure configuration.

export const categories = [
  { id: 'ulpa', name: 'ULPA 필터', description: '0.1µm 입자까지 99.999% 제거하는 초고성능 필터' },
  { id: 'hepa', name: 'HEPA 필터', description: '반도체, 제약 등 고청정 환경을 위한 표준 고성능 필터' },
  { id: 'medium', name: 'MEDIUM 필터', description: '공조 시스템의 효율을 높이는 중성능 필터' },
  { id: 'pre', name: 'PRE 필터', description: '큰 먼지를 1차로 제거하여 메인 필터를 보호' },
  { id: 'chemical', name: 'CHEMICAL 필터', description: '유해가스 및 악취 제거를 위한 특수 활성탄 필터' },
  { id: 'clean-equipment', name: 'CLEAN 장비', description: 'FFU, EFU 등 클린룸 필수 장비' },
  { id: 'maintenance', name: '클린룸 유지보수', description: '전문 장비를 활용한 필터 성능 측정 및 교체 서비스' },
  { id: 'etc', name: '기타', description: '고객 맞춤형 특수 필터 및 관련 자재' },
];

export const getCategoryById = (id) => categories.find(c => c.id === id);
