import { Fragment, useMemo } from 'react';
import { useAdminDepartmentUnitAndAreaTableEditAndCreate } from '@hooks/common/useAdminDepartmentUnitAndAreaTableEditAndCreate';
import { ApplicationTable } from '@components/global/table/ApplicationTable';
import {
  DepartmentsPatientAndDoctorCountDataColumn,
  DepartmentsPatientAndDoctorCountTableRowData,
} from '@components/tables/row-col-mapping/DepartmentsTable';
import { useDispatch, useSelector } from 'react-redux';
import {
  setNoOfPages,
  setResultFrom,
  setResultTo,
  setTotalDataCount,
} from '../../redux/reducers/tableReducer';
import { WarningModal } from '@components/modals/GlobalModal';
import EditDepartmentModal from '@components/modals/quickAction/EditDepartmentModal';
import { AddNewDeptServiceAreaModal } from '@components/modals/quickAction/AddNewDeptServiceAreaModal';

interface AdminDepartmentUnitAndAreaTableEditAndCreateProps {
  siteId: string;
  type: 'departments' | 'units' | 'area' | 'role';
  openNewItemModal: boolean;
  handleNewItemModal: () => void;
}

const AdminDepartmentUnitAndAreaTableEditAndCreate = ({
  type,
  openNewItemModal,
  handleNewItemModal,
  siteId,
}: AdminDepartmentUnitAndAreaTableEditAndCreateProps) => {
  const dispatch = useDispatch();
  const {
    // Values
    currentPage,
    perPage,
    tableFrom,
    tableTo,
    searchTable,
    tableData,
    tableDataLoading,
    tableDataError,
    navigate,
    showDeleteModal,
    showEditModal,
    actions,
    editItemName,
    editItemDescription,

    // Functions
    showOnDeleteModalHandler,
    showOnEditModalHandler,
    onUpdateSearchTable,
    onUpdatePerPageItem,
    onClickNext,
    onClickPrevious,
    onEnterPageNumber,
    onUpdateSelectFrom,
    onUpdateSelectTo,
    setShowDeleteModal,
    setShowEditModal,
    proceedDeleteItem,
    onUpdateEditItemName,
    onUpdateEditItemDescription,
    updateItemInformation,
    onUpdateCreateNewItemName,
    onUpdateCreateNewItemDescription,
    submitCreateNewItem,
    onUpdateEditTotalBeds,
    onUpdateEditOccupiedBeds,
    onUpdateCreateNewItemTotalBeds,
    onUpdateCreateNewItemOccupiedBeds,
    onUpdateEditType,
    onUpdateCreateNewItemType,
    onUpdateEditNote,
    onUpdateEditPlan,
    onUpdateEditProcedure,
    onUpdateEditLabTest,
    onUpdateEditAppointment,
    onUpdateEditVitals,
    onUpdateEditMedicalSupply,
    onUpdateEditAdmitPatient,
    onUpdateEditTransferPatient,
    onUpdateEditMovePatient,
    onUpdateEditDischargePatient,
    onUpdateEditTimeOfDeath,
    onUpdateEditReview,
    onUpdateEditLogs,
    onUpdateEditPrescription,
    onUpdateEditDental,
    onUpdateEditClerking,
    onUpdateEditRadiology,
    onUpdateEditConsult,
    onUpdateEditReferral,
    onUpdateEditReferExP,
    onUpdateEditUpload,
    onUpdateEditCharts,
    onUpdateEditNursing,
  } = useAdminDepartmentUnitAndAreaTableEditAndCreate(
    type,
    siteId,
    handleNewItemModal
  );

  const { resultFrom, noOfPages, totalDataCount, resultTo } = useSelector(
    (state: any) => state.adminProviderTable
  );

  if (tableData && !tableDataLoading && !tableDataError) {
    const count = tableData?.data?.count;

    dispatch(setTotalDataCount(count));
    dispatch(
      setNoOfPages(Math.ceil(count / (perPage === 'All' ? count : perPage)))
    );

    if (actions === 'page-load') {
      dispatch(setResultFrom(1));
      dispatch(
        setResultTo(
          currentPage + 1 === noOfPages
            ? count
            : currentPage * (perPage !== 'All' ? perPage : 0) +
                (perPage !== 'All' ? perPage : 0)
        )
      );
    }

    if (
      actions === 'selectFrom' ||
      actions === 'selectTo' ||
      actions === 'search' ||
      actions === 'tab'
    ) {
      dispatch(
        setResultTo(
          1 === noOfPages
            ? count
            : currentPage * (perPage !== 'All' ? perPage : 0) +
                (perPage !== 'All' ? perPage : 0)
        )
      );
    }

    if (actions === 'nextPage' || actions === 'previousPage') {
      dispatch(
        setResultTo(
          currentPage + 1 === noOfPages
            ? count
            : currentPage * (perPage !== 'All' ? perPage : 0) +
                (perPage !== 'All' ? perPage : 0)
        )
      );
    }

    if (actions === 'pageNumber') {
      dispatch(
        setResultTo(
          currentPage === noOfPages
            ? totalDataCount
            : currentPage * (perPage !== 'All' ? perPage : 0) +
                (perPage !== 'All' ? perPage : 0)
        )
      );
    }
  }

  const columns = useMemo(
    () => DepartmentsPatientAndDoctorCountDataColumn(type),
    [type]
  );

  const data = useMemo(
    () =>
      DepartmentsPatientAndDoctorCountTableRowData(
        tableData?.data[`${type}`],
        tableDataLoading,
        navigate,
        type,
        showOnDeleteModalHandler,
        showOnEditModalHandler
      ) ?? [],
    [
      tableDataLoading,
      navigate,
      showOnDeleteModalHandler,
      showOnEditModalHandler,
      tableData?.data,
      type,
    ]
  );

  return (
    <Fragment>
      <ApplicationTable
        tableColumns={columns}
        tableData={data}
        query={searchTable}
        onUpdateQuery={(e) => onUpdateSearchTable(e.target.value)}
        perPage={perPage}
        onUpdatePerPageItem={onUpdatePerPageItem}
        filterFromDate={tableFrom as Date}
        onUpdateFilterFromDate={onUpdateSelectFrom}
        filterToDate={tableTo as Date}
        onUpdateFilterToDate={onUpdateSelectTo}
        noOfPages={noOfPages}
        totalCount={totalDataCount}
        resultFrom={resultFrom}
        resultTo={resultTo}
        onClickNext={onClickNext}
        onClickPrevious={onClickPrevious}
        currentPage={currentPage}
        onEnterPageNumber={onEnterPageNumber}
        containerClassName={`mt-8`}
      />

      <WarningModal
        open={showDeleteModal}
        handler={() => setShowDeleteModal(!showDeleteModal)}
        proceed={proceedDeleteItem}
      />

      <EditDepartmentModal
        type={type}
        open={showEditModal}
        handler={() => setShowEditModal(!showEditModal)}
        nameOfDepartment={editItemName}
        updateDepartmentInformation={updateItemInformation}
        onUpdateDeptName={onUpdateEditItemName}
        onUpdateDeptDescription={onUpdateEditItemDescription}
        descriptionPlaceholder={editItemDescription}
        onUpdateEditTotalBeds={onUpdateEditTotalBeds}
        onUpdateEditOccupiedBeds={onUpdateEditOccupiedBeds}
        onUpdateEditType={onUpdateEditType}
        onUpdateEditNote={onUpdateEditNote}
        onUpdateEditPlan={onUpdateEditPlan}
        onUpdateEditProcedure={onUpdateEditProcedure}
        onUpdateEditLabTest={onUpdateEditLabTest}
        onUpdateEditAppointment={onUpdateEditAppointment}
        onUpdateEditVitals={onUpdateEditVitals}
        onUpdateEditMedicalSupply={onUpdateEditMedicalSupply}
        onUpdateEditAdmitPatient={onUpdateEditAdmitPatient}
        onUpdateEditTransferPatient={onUpdateEditTransferPatient}
        onUpdateEditMovePatient={onUpdateEditMovePatient}
        onUpdateEditDischargePatient={onUpdateEditDischargePatient}
        onUpdateEditTimeOfDeath={onUpdateEditTimeOfDeath}
        onUpdateEditReview={onUpdateEditReview}
        onUpdateEditLogs={onUpdateEditLogs}
        onUpdateEditPrescription={onUpdateEditPrescription}
        onUpdateEditDental={onUpdateEditDental}
        onUpdateEditClerking={onUpdateEditClerking}
        onUpdateEditRadiology={onUpdateEditRadiology}
        onUpdateEditConsult={onUpdateEditConsult}
        onUpdateEditReferral={onUpdateEditReferral}
        onUpdateEditReferExP={onUpdateEditReferExP}
        onUpdateEditUpload={onUpdateEditUpload}
        onUpdateEditCharts={onUpdateEditCharts}
        onUpdateEditNursing={onUpdateEditNursing}
      />

      <AddNewDeptServiceAreaModal
        updateDescription={onUpdateCreateNewItemDescription}
        updateName={onUpdateCreateNewItemName}
        handler={handleNewItemModal}
        name={
          type === 'departments'
            ? 'Department'
            : type === 'units'
            ? 'Unit'
            : type === 'area'
            ? 'Service Area'
            : 'Role'
        }
        open={openNewItemModal}
        submit={submitCreateNewItem}
        onUpdateCreateTotalBeds={onUpdateCreateNewItemTotalBeds}
        onUpdateCreateOccupiedBeds={onUpdateCreateNewItemOccupiedBeds}
        onUpdateCreateNewItemType={onUpdateCreateNewItemType}
      />
    </Fragment>
  );
};

export default AdminDepartmentUnitAndAreaTableEditAndCreate;
