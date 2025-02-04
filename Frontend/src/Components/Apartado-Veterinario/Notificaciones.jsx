import * as React from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';

export default function ColorBadge() {
    return (
        <Stack spacing={2} direction="row">
            <Badge badgeContent={6} color="secondary">
                <MailIcon sx={{ color: "#c5bfbf", fontSize: 30 }} />
            </Badge>
        </Stack>
    );
}
