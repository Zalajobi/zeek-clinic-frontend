import {
  FaUserDoctor,
  FaBed,
  FaUserInjured,
  FaSitemap,
  FaBuilding,
  FaUsers,
  FaUserLock,
  FaBuildingColumns,
} from 'react-icons/fa6';
import { Fragment } from 'react';

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const ProviderIcon = ({
  className = '',
  size = 20,
  color = '#3975ae',
}: IconProps) => {
  return (
    <Fragment>
      <FaUserDoctor
        size={size}
        className={className}
        color={color}
      />
    </Fragment>
  );
};

export const PatientIcon = ({
  className = '',
  size = 20,
  color = '#3975ae',
}: IconProps) => {
  return (
    <Fragment>
      <FaUserInjured
        size={size}
        className={className}
        color={color}
      />
    </Fragment>
  );
};

export const UnitIcon = ({
  className = '',
  size = 20,
  color = '#3975ae',
}: IconProps) => {
  return (
    <Fragment>
      <FaBed
        size={size}
        className={className}
        color={color}
      />
    </Fragment>
  );
};

export const DepartmentIcon = ({
  className = '',
  size = 20,
  color = '#3975ae',
}: IconProps) => {
  return (
    <Fragment>
      <FaSitemap
        size={size}
        className={className}
        color={color}
      />
    </Fragment>
  );
};

export const ServiceAreaIcon = ({
  className = '',
  size = 20,
  color = '#3975ae',
}: IconProps) => {
  return (
    <Fragment>
      <FaBuilding
        size={size}
        className={className}
        color={color}
      />
    </Fragment>
  );
};

export const RolesIcon = ({
  className = '',
  size = 20,
  color = '#3975ae',
}: IconProps) => {
  return (
    <Fragment>
      <FaUsers
        size={size}
        className={className}
        color={color}
      />
    </Fragment>
  );
};

export const AdminIcon = ({
  className = '',
  size = 20,
  color = '#3975ae',
}: IconProps) => {
  return (
    <Fragment>
      <FaUserLock
        size={size}
        className={className}
        color={color}
      />
    </Fragment>
  );
};

export const SiteIcon = ({
  className = '',
  size = 20,
  color = '#3975ae',
}: IconProps) => {
  return (
    <Fragment>
      <FaBuildingColumns
        size={size}
        className={className}
        color={color}
      />
    </Fragment>
  );
};
