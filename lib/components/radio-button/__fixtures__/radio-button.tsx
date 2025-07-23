import { useState } from 'react';
import RadioButton from '../radio-button';
import type { RadioOption } from '../types';
const protocolOptions: RadioOption[] = [
  {
    id: 'tcp',
    label: 'PROTOCOL_TCP',
    value: 'tcp'
  },
  {
    id: 'udp',
    label: 'PROTOCOL_UDP', 
    value: 'udp'
  },
  {
    id: 'legacy',
    label: '[LEGACY_SYSTEM]',
    value: 'legacy',
    disabled: false
  }
];

export default function RadioButtonFixture() {
  const [selectedProtocol, setSelectedProtocol] = useState<string>('tcp');

  return (
    <div style={{ 
      padding: '2rem', 
      backgroundColor: '#000', 
      minHeight: '100vh',
      fontFamily: 'monospace'
    }}>
      <h2 style={{ color: '#00f2ea', marginBottom: '2rem' }}>
        Glitch Radio Component Test
      </h2>
      
      <RadioButton
        options={protocolOptions}
        selectedValue={selectedProtocol}
        name="protocol"
        onSelectionChange={setSelectedProtocol}
      />
      
      <div style={{ 
        marginTop: '2rem', 
        color: '#e5e5e5',
        fontSize: '0.9rem'
      }}>
        <strong>Selected:</strong> {selectedProtocol}
      </div>
    </div>
  );
}

// Additional test scenarios
export function EmptyState() {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#000' }}>
      <RadioButton
        options={[]}
        name="empty"
        onSelectionChange={() => {}}
      />
    </div>
  );
}

export function AllDisabled() {
  const disabledOptions: RadioOption[] = protocolOptions.map(opt => ({
    ...opt,
    disabled: true
  }));

  return (
    <div style={{ padding: '2rem', backgroundColor: '#000' }}>
      <RadioButton
        options={disabledOptions}
        name="disabled"
        onSelectionChange={() => {}}
      />
    </div>
  );
}
