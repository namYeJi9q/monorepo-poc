import React from 'react';
import { Button } from './Button';

export default { title: 'Common/Button', component: Button };

export const Primary = () => <Button title="Primary" />;
export const Secondary = () => <Button title="Secondary" enable={false} />;